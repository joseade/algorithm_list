class Node {
  constructor(value) {
    this.value = value;
    this.children = new Map();
    this.isEndOfWord = false;
  }
  hasChild(ch) {
    return this.children.has(ch);
  }
  addChild(ch) {
    this.children.set(ch, new Node(ch));
  }
  getChild(ch) {
    return this.children.get(ch);
  }
}

class Trie {
  constructor() {
    this.root = new Node(" ");
  }
  insert(word, meaning) {
    let current = this.root;
    for (let ch of word) {
      if (!current.hasChild(ch)) {
        current.addChild(ch);
      }
      current = current.getChild(ch);
    }
    current.isEndOfWord = true;
    current.meaning = meaning;
  }
  contains(word) {
    let current = this.root;
    for (let ch of word) {
      if (!current.hasChild(ch)) return false;
      current = current.getChild(ch);
    }
    return current.meaning;
  }
}

module.exports = {
  Trie,
};
