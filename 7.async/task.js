//Задача 1
//п.1

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  //п.2
  addClock(time, callback) {
    if (!time || !callback) {
      //проверяю переданы ли параметры времени и коллбека
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if (this.alarmCollection.find((setup) => setup.time === time)) {
      console.warn("Уже присутствует звонок на это же время"); //проверяем есть ли звонок в то же время
    }
    this.alarmCollection.push({
      callback,
      time,
      canCall: true,
    }); //добавляем в массив звонков объект со свойствами
  }

  //п.3
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (setup) => setup.time != time
    );
  } //удаляем одинаковые звонки из массива

  //п.4
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  //п.5
  start() {
    if (this.intervalId) {
      //если есть значения, то завершаем
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((setup) => {
        //перебираем через foreach
        if (setup.time === this.getCurrentFormattedTime() && setup.canCall) {
          //проверяем совпадение time и выполнение звонка
          setup.canCall = false; //делаем возомжность вызова звонка false
          setup.callback(); //вызываес коллбек звонка
        }
      });
    });
  }

  //п.6
  stop() {
    clearInterval(this.intervalId); //вызвали функцию для удаления интервала
    this.intervalId = null; //для сброса присвоили значени
  }
  //п.7
  resetAllCalls() {
    this.alarmCollection.forEach((setup) => setup.canCall = true); //присваивайем true
  }

  //п.8
  clearAlarms() {
    this.stop(); //метод остановки интервала
    this.alarmCollection = []; //удаляем все звонки
  }
}
