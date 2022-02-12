let Video = class {
    constructor(title, uploader, time) {
    this.title = title
    this.uploader= uploader
    this.time = time
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time}  of ${this.title}!`)
    }
} 

let myVideo = new Video('myVideo.mp4', 'Philip', 2600);
myVideo.watch()

let videos = [
new Video('myVideo.mp4', 'Philip', 600),
new Video('myVideo1.mp4', 'John', 800),
new Video('myVideo2.mp4', 'Melissa', 1000),
new Video('myVideo3.mp4', 'Sara', 400),
new Video('myVideo4.mp4', 'James', 570)
]

// videos[0].watch()

let createVideo = ([title, uploader, time]) => new Video (title,uploader,time);

[
['myVideo.mp4', 'Philip', 600],
['myVideo1.mp4', 'John', 800],
['myVideo2.mp4', 'Melissa', 1000],
['myVideo3.mp4', 'Sara', 400],
['myVideo4.mp4', 'James', 570]
].map(createVideo)

videos[0].watch()
videos[1].watch()
videos[2].watch()
videos[4].watch()
