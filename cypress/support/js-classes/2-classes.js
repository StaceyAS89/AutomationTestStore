class Comments {
    constructor(text) {
        this.text = text;
        this.likesQuantity = 0
    }

    addLike() {
        this.likesQuantity +=1;
    }
//static method - не наследуются екземплярами класса, доступні у використанні лише у классів
// коли хочемо реалізувати функцію яка залежить від іншої
    static mergeComments(first, second) {
        return `${first} + ${second}`
    }
}

const firstComment = new Comments('Text 1')
const secondComment = new Comments('Text 2')

let mergedText = Comments.mergeComments(firstComment.text, secondComment.text);

console.log(mergedText)

firstComment.addLike();

let mergedText2 = firstComment.mergeComments('qwe', 'qwe')
console.log(mergedText2)