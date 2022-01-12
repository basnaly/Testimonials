
class CarouselObj {
    constructor(avatar, name, stars, text) {
        this.avatar = avatar;
        this.name = name;
        this.stars = stars;
        this.text = text;
    }
    applyToHtml() {
        $(".carousel-item.active > .avatar").attr("src", this.avatar);
        $(".carousel-item.active > .name").text(this.name);
        $(".carousel-item.active > .stars").text("★".repeat(this.stars));
        $(".carousel-item.active > .text").text(this.text);
    }

    applyToHtmlAnimated(isPrev = true) { 
        let self = this;
        console.log(this) // CarouselObj
        $(".carousel-item.active").animate({left: isPrev ? '-100%':'100%', opacity: 0}, 1000, function(){ //callback func, it has it own this 
            console.log(self) // CarouselObj
            console.log(this) // HTML div ".carousel-item.active" 
            self.applyToHtml()
            $(this).css('left', isPrev ? '100%':'-100%').animate({left: 0, opacity: 1}, 1000)
        })  
    }
}

const listOfCarusel = [
    new CarouselObj('img/avatar-1.png', 'Alex', 4, 'How does the ocean say hi? It waves!'),
    new CarouselObj('img/avatar-2.png', 'Kate', 5, 'What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.'),
    new CarouselObj('img/avatar-3.png', 'Max', 3, 'What did the left eye say to the right eye? Between us, something smells!'),
    new CarouselObj('img/avatar-4.png', 'Sarah', 4, 'What social event do spiders love to attend? Webbings.'),
    new CarouselObj('img/avatar-5.png', 'Bob', 5, 'What do you call two bananas on the floor? Slippers.'),
]

let currentIndex = 0; // index of current photo

$(function() {
    listOfCarusel[currentIndex].applyToHtml() // set current CarouselObj
});

const onClick = isPrev => {
    if (isPrev === true) {
        currentIndex = currentIndex - 1; 
        if (currentIndex === -1) {
            currentIndex = listOfCarusel.length - 1;  
        }
    } else {
        currentIndex = currentIndex + 1; 
        if (currentIndex === listOfCarusel.length) {
            currentIndex = 0;  
        }
    }

    listOfCarusel[currentIndex].applyToHtmlAnimated(isPrev); // call applyToHtmlAnimated func

};
