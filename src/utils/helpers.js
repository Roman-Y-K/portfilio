const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
};

const validateField = (name, value) => {
  if (name === 'user_name' && !value.trim()) return 'Name is required';
  if (name === 'user_email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    return 'Invalid email format';
  if (name === 'user_message' && value.length < 10)
    return 'Message must be at least 10 characters';
  return '';
};

export { debounce, validateField };
