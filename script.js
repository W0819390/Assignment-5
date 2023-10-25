/*
    Assignment 05
    Name: [Sam Sondhi]
    Student ID: [0819390]
*/

$(document).ready(function () {
    $(document).ready(function () {
        // ContentItem class definition
        class ContentItem {
          constructor(id, name, description, category) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
          }
      
          updateContentItem(id, name, description, category) {
            if (id === this.id) {
              if (name !== null) this.name = name;
              if (description !== null) this.description = description;
              if (category !== null) this.category = category;
            }
          }
      
          toString() {
            return `
              <div class="content-item-wrapper" id="content-item-${this.id}">
                <h2>${this.name}</h2>
                <p>${this.description}</p>
                <div>${this.category}</div>
              </div>
            `;
          }
        }
      
        // Create an array of content items with a hero theme
        const contentItems = [
          new ContentItem(0, "Ferrari", "A symbol of speed and precision, the Ferrari is the epitome of racing excellence, designed for those who crave the thrill of the track.", "Racing"),
          new ContentItem(1, "G wagon", "With rugged charisma and unstoppable power, the G-Wagon is your passport to off-roading adventures in unparalleled style and comfort.", "Off Roading"),
          new ContentItem(2, "Elantra", "The Elantra is a smart choice for the budget-conscious driver, offering efficiency and reliability without sacrificing quality.", "Money Saver"),
          new ContentItem(3, "Mercedes", "Embodying opulence and refinement, the Mercedes is the pinnacle of luxury, promising a ride that's as smooth as it is prestigious.", "Luxury"),
          new ContentItem(4, "Tesla", "Setting the standard for electric vehicles, Tesla combines cutting-edge technology with sustainability, redefining the future of transportation.", "Electric"),
        ];
      
        const contentList = $("#content-item-list");
      
        // Loop through contentItems and append them to the content list
        contentItems.forEach((contentItem) => {
          contentList.append(contentItem.toString());
        });
      
        // Add styling to content-item-wrapper elements
        $(".content-item-wrapper").css({
          border: "1px solid #000",
          width: "300px",
          padding: "10px",
          margin: "20px auto",
        });
      
        // Bonus part: Handle button clicks
        $("#update-success-button").click(function () {
          // Update a content item successfully
          contentItems[0].updateContentItem(0, "Ferrari", null, "Racing");
          // Re-render the content item
          $("#content-item-0").replaceWith(contentItems[0].toString());
        });
      
        $("#update-fail-button").click(function () {
          // Attempt to update a content item unsuccessfully
          contentItems[1].updateContentItem(0, "New Name", null, "New Category");
          // No change in the content item
        });
      });
      

});


