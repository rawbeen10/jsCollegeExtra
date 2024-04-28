        //Creating a list in using javascript.
        
        let items = ["Item 1", "Item 2", "Item 3"]

        let ul = document.createElement("ul")

        items.forEach(function(item){
            let listItems = document.createElement("li")
            listItems.textContent = item
            ul.appendChild(listItems)
        })

        document.body.appendChild(ul)
