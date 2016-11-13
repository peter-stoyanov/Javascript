function constructionCrew(objdata){
     var worker = objdata;
     if (worker.handsShaking === false) {
          return worker;
     }else {
          worker.bloodAlcoholLevel += 0.1 * worker.weight * worker.experience;
          worker.handsShaking = false;
          return worker;
     }
}
