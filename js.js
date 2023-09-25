
1
function arraySum(array) {
    return array.reduce((sum, currentElement) => sum + currentElement, 0);
    }
    
    const myArray = [1, 2, 3, 4, 5];
    const sum = arraySum(myArray);
    console.log(sum); // Output: 15
    2
    function findDivisors(number) {
        const divisors = [];
        
        for (let i = 1; i <= number; i++) {
          if (number % i === 0) {
            divisors.push(i);
          }
        }
        
        return divisors;
      }
      
      const number = 12; 
      
      const result = findDivisors(number);
      console.log(result); 
      3
      function stringToArray(inputString) {
        return Array.from(inputString);
        }
        
        // Пример использования функции:
        const inputString = "Пример строки";
        const resultArray = stringToArray(inputString);
        console.log(resultArray);
        4
        function reverseString(inputString) {
  // Разбиваем строку на массив символов, переворачиваем его и объединяем обратно в строку
  //return inputString.split('').reverse().join('');
//}

// Пример использования:
//const originalString = "Привет, мир!";
//const reversedString = reverseString(originalString);
//console.log(reversedString); // Выведет "!рим ,тевирП"
          5
          function capitalizeFirstLetter(inputString) {
            // Проверяем, что строка не пуста
            if (inputString.length === 0) {
            return inputString;
            }
            
            // Берем первую букву и делаем её заглавной, затем добавляем остальную часть строки без изменений
            return inputString[0].toUpperCase() + inputString.slice(1);
            }
            
            // Пример использования функции:
            const originalString = "пример строки";
            const capitalizedString = capitalizeFirstLetter(originalString);
            console.log(capitalizedString); // Выведет: "Пример строки"
           6
            //function capitalizeWords(str) {
                // Разделим строку на слова, используя пробел как разделитель
                //const words = str.split(' ');
              
                // Создадим новый массив для хранения слов с заглавной первой буквой
                //const capitalizedWords = [];
              
                // Пройдемся по каждому слову и сделаем заглавной первую букву
                //for (const word of words) {
                  // Если слово непустое, сделаем первую букву заглавной и добавим его в массив
                  //if (word.length > 0) {
                    //const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
                    //capitalizedWords.push(capitalizedWord);
                  //} else {
                    // Если слово пустое, просто добавим его в массив
                    //capitalizedWords.push(word);
                  //}
                //}
              
                // Склеим все слова в строку снова, используя пробел в качестве разделителя
                //const result = capitalizedWords.join(' ');
              
                //return result;
              //}
              
              // Пример использования функции
              //const inputString = "это пример строки для тестирования";
              //const capitalizedString = capitalizeWords(inputString);
              //console.log(capitalizedString); // Выведет: "Это Пример Строки Для Тестирования"
7
//function fillArray(n) {
    //if (n <= 0) {
      //return [];
    //}
  
    //const result = [];
    //for (let i = 1; i <= n; i++) {
      //result.push(i);
    //}
  
    //return result;
  //}
  
  //const n = 10; // Замените 10 на желаемое число элементов в массиве
  //const myArray = fillArray(n);
  //console.log(myArray);
  8
  //function суммаЦифрЧисла(число) {
    // Преобразуем число в строку, чтобы работать с его цифрами
    //const строкаЧисла = число.toString();
    
    // Инициализируем переменную для суммы
    //let сумма = 0;
    
    // Итерируемся по каждой цифре в строке числа
    //for (let i = 0; i < строкаЧисла.length; i++) {
      // Преобразуем цифру обратно в число и добавляем к сумме
      //сумма += parseInt(строкаЧисла[i]);
    //}
    
    // Возвращаем сумму
    //return сумма;
  //}
  
  // Пример использования функции
  //const число = 12345;
  //const результат = суммаЦифрЧисла(число);
  //console.log(`Сумма цифр числа ${число} равна ${результат}`);
  9
  //function isLeapYear(year) {
    //if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
     // return true;
    //} else {
    //  return false;
    //}
 // }
  
  // Примеры использования:
  //console.log(isLeapYear(2020)); // Выведет true, так как 2020 - високосный год.
  //console.log(isLeapYear(2021)); // Выведет false, так как 2021 - не високосный год.
  10
  //function secondsToDays(seconds) {
   // const secondsInADay = 86400; // 60 секунд * 60 минут * 24 часа
   // const days = seconds / secondsInADay;
   // return days;
  //}
  
  // Пример использования функции:
  //const seconds = 86400; // Например, 86400 секунд, что равно 1 дню
 //const days = secondsToDays(seconds);
  //console.log(`Количество суток: ${days}`);
  11
  //function getRandomElement(arr) {
    // Генерируем случайный индекс от 0 до длины массива - 1
    //const randomIndex = Math.floor(Math.random() * arr.length);
    
    // Возвращаем элемент с соответствующим индексом
    //return arr[randomIndex];
  //}
  
  // Пример использования функции
  //const myArray = [1, 2, 3, 4, 5];
  //const randomItem = getRandomElement(myArray);
  //console.log(randomItem); // Вывод случайного элемента из массива
            
            
            
