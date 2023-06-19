import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      country: '',
      city: '',
      birthdate: '',
      gender: '',
      password: '',
      errors: {},
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, country, city, birthdate, gender, password } = this.state;
    const errors = {};

    if (username.trim() === "") {
      errors.username = "Будь ласка, введіть ім'я користувача.";
    }

    if (!this.isValidEmail(email)) {
      errors.email = "Будь ласка, введіть правильний email.";
    }

    if (country.trim() === "") {
      errors.country = "Будь ласка, введіть країну.";
    }

    if (city.trim() === "") {
      errors.city = "Будь ласка, введіть місто.";
    }

    if (!this.isValidDate(birthdate)) {
      errors.birthdate = "Будь ласка, введіть правильну дату народження.";
    }

    if (gender === "") {
      errors.gender = "Будь ласка, виберіть стать.";
    }

    if (password.trim() === "" || password.length < 5) {
      errors.password = "Пароль повинен містити щонайменше 5 символів.";
    }

    if (Object.keys(errors).length === 0) {
      alert("Форма реєстрації валідна! Можна відправити дані на сервер або виконати інші дії.");
    } else {
      this.setState({ errors });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  isValidEmail(email) {
    // Простая проверка наличия символа '@' в введеном email
    return email.indexOf("@") !== -1;
  }

  isValidDate(date) {
    const inputDate = new Date(date);
    const minDate = new Date("1910-01-01");
    const maxDate = new Date("2009-12-31");

    return inputDate >= minDate && inputDate <= maxDate;
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <h2>Реєстрація</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Ім'я користувача:</label>
          <input
            type="text"
            id="username"
            name="username"
            required
            onChange={this.handleChange}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={this.handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}

          <label htmlFor="country">Країна:</label>
          <input
            type="text"
            id="country"
            name="country"
            required
            onChange={this.handleChange}
          />
          {errors.country && <span className="error-message">{errors.country}</span>}

          <label htmlFor="city">Місто:</label>
          <input
            type="text"
            id="city"
            name="city"
            required
            onChange={this.handleChange}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}

          <label htmlFor="birthdate">Дата народження:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            required
            onChange={this.handleChange}
          />
          {errors.birthdate && <span className="error-message">{errors.birthdate}</span>}

          <label htmlFor="gender">Стать:</label>
          <select id="gender" name="gender" required onChange={this.handleChange}>
            <option value="">Виберіть стать</option>
            <option value="male">Чоловік</option>
            <option value="female">Жінка</option>
            <option value="other">Інше</option>
          </select>
          {errors.gender && <span className="error-message">{errors.gender}</span>}

          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength="5"
            required
            onChange={this.handleChange}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}

          <button type="submit">Зареєструватися</button>
        </form>
        <div id="errorNotification"></div>
      </div>
    );
  }
}

export default Main;
