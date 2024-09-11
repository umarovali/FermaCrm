import axios from 'axios';
import { useState } from 'react';

function MyComponent() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    // Создание объекта FormData для загрузки изображения
    const formData = new FormData();
    formData.append('file', file);

    // Первый запрос: Загрузка изображения
    axios.post('https://api.bbk.kg/upload', formData)
      .then(response => {

        const imageUrl = response.data.url;

        // Второй запрос: Отправка URL изображения и других данных
        return axios.post('https://api.bbk.kg/admin/users/', {
          full_name: text,
          image: imageUrl,
          phone_number: '123456789',  // Пример других данных
          password: 'password123',     // Пример других данных
          role: 'user'                 // Пример других данных
        });

      })
      .then(response => {
        console.log('Данные успешно отправлены:', response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке или отправке данных:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MyComponent;
