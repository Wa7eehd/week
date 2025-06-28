

let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
let text5 = document.getElementById('text5');
let text6 = document.getElementById('text6');
let text7 = document.getElementById('text7');
let text8 = document.getElementById('text8');
let text9 = document.getElementById('text9');

let btn   = document.getElementById('btn');


// message for btn 


let datePro ;
if(localStorage.week1 != null){
datePro = JSON.parse(localStorage.week1)
}
else {
    datePro = [];
}

 
function BtnOnClick(){

let newDate = {
text1:text1.value.toLowerCase(),
text2:text2.value.toLowerCase(),
text3:text3.value.toLowerCase(),
text4:text4.value.toLowerCase(),
text5:text5.value.toLowerCase(),
text6:text6.value.toLowerCase(),
text7:text7.value.toLowerCase(),
text8:text8.value.toLowerCase(),
text9:text9.value.toLowerCase()


}

datePro.push(newDate);

// localStorage for save
localStorage.setItem('week1' , JSON.stringify(datePro));
timeout();
deleteA();
ShowWeek();
}


// clear input 
function deleteA(){

    text1.value = '';
    text2.value = '';
    text3.value = '';
    text4.value = '';
    text5.value = '';
    text6.value = '';
    text7.value = '';
    text8.value = '';
    text9.value = '';
    }


function ShowWeek(){
let table = '';
for(let i = 0; i < datePro.length; i++){
table +=`
  <div class="Table">
  <table>
      
            <center><p>جدول اليوم</p> 
            <div class='btnn'>
            <button   onclick='deleteB(${i})'  id='red' >حذف الجدول</button>
            </div>
            </center>
           
    
        <tr>  <th>اليوم</th>
            <th>المهام الأول</th>
            <th>المهام الثانية</th>
            <th>المهام الثالثة</th>
            <th>المهام الرابعة</th>
            <th>المهام الخامسة</th>
            <th>المهام السادسة</th>
            <th>المهام السابعة</th>
            <th>المهام الثامنة</th>
            <th>المهام التاسعة</th>
        </tr>

        <tbody>
            <tr>
            
                <td>${i}</td>
                <td>${datePro[i].text1}</td>
                <td>${datePro[i].text2}</td>
                <td>${datePro[i].text3}</td>
                <td>${datePro[i].text4}</td>
                <td>${datePro[i].text5}</td>
                <td>${datePro[i].text6} </td>
                <td>${datePro[i].text7}</td>
                <td>${datePro[i].text8}</td>
                <td>${datePro[i].text9}</td>
        
            </tr>
        </tbody>

           </table>
           <br>
           <br>
           
           
        </div>
        <hr>
`;
document.getElementById('main').innerHTML = table;
}

}

ShowWeek();

function deleteB(i)
{
datePro.splice(i,1);
localStorage.week1 = JSON.stringify(datePro)
ShowWeek();
}

