const button= document.querySelector('#detGenderBtn');
const userInput= document.querySelector('#userInput');
const badgeColor= document.querySelector('#badgeColor');

button.addEventListener('click', ()=> {
    const userName= userInput.value;

    if(userName)
    {
        fetch(`https://api.genderize.io?name=${userName}`)
        .then(response=> response.json())
        .then(data => 
            {
                if(data.gender=== 'male')
                {
                    badgeColor.style.backgroundColor= 'blue';
                } else if(data.gender=== 'female')
                {
                    badgeColor.style.backgroundColor= 'pink';
                } else 
                {
                    badgeColor.style.backgroundColor= "";
                }
            }
        );
        
        
    }
});