// У вас есть список активностей, каждая из которых имеет начальное и конечное время. Ваша цель - выбрать максимальное количество неперекрывающихся активностей.
// Напишите функцию maxActivities(activities), которая принимает список активностей. Каждая активность представлена в виде кортежа (начало, конец). Функция должна вернуть список индексов выбранных активностей.
// Функция должна выбирать активности таким образом, чтобы ни одна из выбранных активностей не перекрывалась по времени, и при этом максимизировать общее количество выбранных активностей.

// Пример:
// activities = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11)]
// print(maxActivities(activities))  # Результат: [0, 3, 7]

// Решение с помощью жадного алгоритма

function maxActivities(activities) {
  // Сортируем активности по конечному времени
  activities.sort((a, b) => a[1] - b[1]);

  const selectedActivities = [];
  let previousActivityEndTime = -Infinity;

  for (let i = 0; i < activities.length; i++) {
    const currentActivity = activities[i];
    const [start, end] = currentActivity;

    if (start >= previousActivityEndTime) {
      // Активность не перекрывается с предыдущей, выбираем её
      selectedActivities.push(i);
      previousActivityEndTime = end;
    }
  }

  return selectedActivities;
}

const activities = [
  [1, 4],
  [3, 5],
  [0, 6],
  [5, 7],
  [3, 8],
  [5, 9],
  [6, 10],
  [8, 11]
];

console.log(maxActivities(activities));
