// Завдання 4

// Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо
//заповнити форму даними користувача для оновлення його профілю.
//Однак вам не завжди потрібно заповнити всі поля.Наприклад, користувач
//може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.

// Використовуючи утиліту Partial та generics, виправте тип параметра
//функції так, щоб уникнути помилок типізації.

type UserType = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(
  initialValues: UserType,
  updates: Partial<UserType>
) {
  // Оновлення користувача
  return { ...initialValues, ...updates };
}

const initialUser = {
  name: "John",
  surname: "Doe",
  email: "user@mail.com",
  password: "password123",
};

const updatedUser = createOrUpdateUser(initialUser, {
  email: "user@mail.com",
  password: "password123",
});
