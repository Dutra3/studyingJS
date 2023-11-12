module.exports = {
    posts: [],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({id: generateId(), title, description});
    }
}

const generateId = () => {
    return Math.random().toString(36).substring(2,9)
}