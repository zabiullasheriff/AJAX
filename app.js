fetch('https://dog.ceo/api/breeds/list/all')
.then(function(response){
    return response.json()
})
.then(function(data){
    createBreedList(data.message)
})  

function createBreedList(breedList){
    document.getElementById("breed").innerHTML = `
    <select onchange="showByBreed(this.value)">
            <option>Select a breed</option>
            ${Object.keys(breedList).map(function(breed){
                return `<option>${breed}</option>`
            }).join('')}
        </select>
    `
}
function showByBreed(breed){
    if (breed != 'Select a breed'){
        fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            displayImage(data.message)
        })
    }
}
function displayImage(images){
    document.getElementById('pic').innerHTML = `
    <div class="picture" style="background-image: url('${images[0]}');"></div>
    `
}
