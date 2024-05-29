// Interactive list

const container = document.getElementById("container");

// create an input element
const myInput = createEle("input", "my_input");
container.append(myInput)

// create btn
const myBtn = createEle("button", "btn")
myBtn.textContent = "Add to list";
container.append(myBtn);

// creating ul element
const listStructure = createEle("ul", "list_struct");
container.append(listStructure)

// add event listener to our button
myBtn.addEventListener("click", (e)=>{
    const tempName = myInput.value;
    addToLIst(tempName);
    myInput.value = ""
})

// addToLIst("kwame");
// addToLIst("David");
// addToLIst("Ernest");

// console.dir(container)
function addToLIst(listName)
{
    // creating li elements
    const listItem = createEle("li", "list_item");
    listStructure.append(listItem);
    // adding manageable buttons
    const span1 = createEle("span", "span1");
    span1.textContent = listName
    listItem.append(span1);
    const span2 = createEle("span", "span2");
    listItem.append(span2);
    span2.textContent = "Edit";
    const span3 = createEle("span", "span3");
    span3.textContent = "Delete";
    listItem.append(span3);

    // editing
    span2.addEventListener("click", (e)=>{
        if (e.target.textContent === "Edit")
            {
            span1.style.backgroundColor = "green";
            span1.contentEditable = "true";
            e.target.textContent = "Save";
        }else
        {
            span1.style.backgroundColor = "white";
            span1.contentEditable = "false";
            e.target.textContent = "Edit";
        }
    })

    // deleting the list item
    span3.addEventListener("click", (e)=>{
        listItem.remove()
    })
}

// create a creater function
function createEle(eleType, eleClass)
{
    const temEle = document.createElement(eleType);
    temEle.classList.add(eleClass); 

    return temEle;
}
