
const loadLessons= () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all")   // promise of return 
    .then(res => res.json())
    .then((json) => displayLesson(json.data)) 


};  

const loadLevelWord =(id) =>{
    console.log(id); 

    const url = `https://openapi.programming-hero.com/api/level/${id}` 

   fetch(url)
   .then((res) => res.json()) 
   .then((data) => displayLevelword(data.data));
} ;


const displayLevelword =(words) => {  
//    1. Get the  container & Empty 
 const wordContainer = document.getElementById("word-container"); 
 wordContainer.innerHTML = "";



// {id: 82, 
//     level: 1, 
//     word: 'Car', 
//     meaning: 'গাড়ি', 
//     pronunciation: 'কার'}


 
// 2. Get into  every lesson
 words.forEach(word => {  
   console.log(word)
    const card = document.createElement("div") 

    card.innerHTML=`
      <div class="bg-white rounded-xl shadow-sm text-center py-15 px-5 space-y-4">
            <h2 class="font-bold text-2xl"> ${word.word}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="text-2xl font-medium font-bangla">${word.meaning}/${word.pronunciation}</div> 
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF90] "><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn btn bg-[#1A91FF10] hover:bg-[#1A91FF90]"><i class="fa-solid fa-volume-high"></i></button>
            </div> 

        </div>
    `;

    wordContainer.append(card);
 });
  



}


 
const displayLesson = (lessons) =>{ 



    // 1. get the container & empty 

    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2. Get into every lessons 

    for(let lesson of lessons){ 
        console.log(lesson)

    // 3. Create Element 

    const btnDiv = document.createElement("div");

    btnDiv.innerHTML=` 


             <button onclick= "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
             <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
             </button>

    
    
    `; 

    levelContainer.append(btnDiv);

    }



}


loadLessons();