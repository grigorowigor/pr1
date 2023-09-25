
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
        function перевернутьСтроку(строка) {
            // Разбиваем строку на массив символов, переворачиваем его и объединяем обратно в строку
            return строка.split('').reverse().join('');
          }
          
          // Пример использования функции
          var исходнаяСтрока = "Привет, мир!";
          var перевернутаяСтрока = перевернутьСтроку(исходнаяСтрока);
          console.log(перевернутаяСтрока); // Выводит "!рим ,тевирП"
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
            
            