let arr = [
    {
        name: 'Alice',
        phone: '019282998'
    },
    {
        name: 'Athur',
        phone: '019234532'
    },
    {
        name: 'Dohn',
        phone: '0987875765'
    },
    {
        name: 'Bela',
        phone: '0448736328'
    },
    {
        name: 'Bela',
        phone: '0448736328'
    },
    {
        name: 'fadil',
        phone: '092023401'
    },
    {
        name: 'Jimmuy',
        phone: '0363633837'
    },
    {
        name: 'Nalo',
        phone: '099898'
    }
];

const show_full = document.getElementById('show_full');
const addName = document.getElementById('add-name');
const addPhone = document.getElementById('add-phone');
const btnAdd = document.getElementById('btn-add');
const inputSearch = document.getElementById('search');
const bntSearch = document.getElementById('btn-search');
const btndelete = document.getElementById('btn-delete');

function render(){
    let newarr = arr.sort(function(a, b) {
        if (a.name < b.name){
            return -1;
        }
     });
    
    let show_tag = ''
for(let i = 0; i < newarr.length; i++){
     show_tag +=  `
    <div class="show" id="show">
    <div class="name">
        ${newarr[i].name}
    </div>
    <div class="phone">
        ${newarr[i].phone}
    </div>
</div>
    
    `
}
show_full.innerHTML = show_tag;
}
render();
btnAdd.onclick = () => {
    let listObj = {
        name : addName.value,
        phone : addPhone.value
    }
    arr.push(listObj);
    addName.value = '';
    addPhone.value = '';
    render();
}

bntSearch.onclick = () => {
    for(let i = 0; i < arr.length; i++) {
        if(inputSearch.value == arr[i].name || inputSearch.value == arr[i].phone){
            show_tag = `
            <div class="show" id="show">
            <div class="name">
                ${arr[i].name}
            </div>
            <div class="phone">
                ${arr[i].phone}
            </div>
            </div> 
            `
            show_full.innerHTML = show_tag;
        }
    }
}
btndelete.onclick = () => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++){
            if(arr[i].name == arr[j].name && arr[i].phone == arr[j].phone){
                arr.splice(j,1);
            }
        }

    }
    render();
}