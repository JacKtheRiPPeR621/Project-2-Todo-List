let ulTasks = $('#ulTasks') 
let btnAdd = $('#btnAdd') 
let btnReset = $('#btnReset') 
let btnCleanUp = $('#btnCleanUp') 
let btnSort = $('#btnSort') 
let inpNewTask = $('#inpNewTask') 

function addItem() {
    let listItem = $('<li>' , {
        'class' : 'list-group-item' , 
        text : inpNewTask.val()
    })

    listItem.click(() => {
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val("")
    toggleInputButtons()
}

inpNewTask.keypress((e) => {
    if(e.which == 13) addItem()
    toggleInputButtons()
})

function clearTasks() {
    // console.log($('#ulTasks li.done'))  or console.log($('#ulTasks .done'))
    $('#ulTasks .done').remove()
    toggleInputButtons()
}

function sortTasks() {
    $('#ulTasks .done').appendTo(ulTasks)
}

function toggleInputButtons() {
    btnAdd.prop('disabled' , inpNewTask.val() == '')
    btnReset.prop('disabled' , inpNewTask.val() == '')
    btnSort.prop('disabled' , ulTasks.children().length < 1)
    btnCleanUp.prop('disabled' , ulTasks.children().length < 1)
}

inpNewTask.on('input' , toggleInputButtons)

btnAdd.click(addItem)

btnReset.click(() => { 
    inpNewTask.val("")
    toggleInputButtons()
})

btnCleanUp.click(clearTasks)

btnSort.click(sortTasks)