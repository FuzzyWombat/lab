<script lang="ts">

type Quote = {
    author: string;
    quote: string;
}

import axios from 'axios'

//CREATING SIDE EFFECTS FOR DAYS, FORGET FUNCTIONAL IMMUTABILITY WERE GOING IMPERITIVE BABY
export default {
    name: 'app',
    data() {
        return {
            quote: '',
            author: '',
            quoteArray: [] as Array<Quote>,
            numQuotes: 0,
            tweet: 'twitter.com/intent/tweet',
            randomColor: ''
        }
    },
    methods: {
        loadQuotes: async function () {
            const response = await axios
                .get(
                    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
                )
                .catch((error) => {
                    console.error(error)

                    this.quoteArray  = [
                        {
                            quote: 'Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.',
                            author: 'Will Ferrel'
                        },
                        {
                            quote: "I'm sick of following my dreams, man. I'm just going to ask where they're going and hook up with 'em later.",
                            author: 'Mitch Hedberg'
                        },
                        {
                            quote: 'The cake is a lie.',
                            author: 'Portal'
                        }
                    ]
                    this.numQuotes = this.quoteArray.length
                    this.getQuote()
                })

            if (response?.data) {
                this.quoteArray = response.data.quotes
                this.numQuotes = this.quoteArray.length
                this.getQuote()
            }
        },
        getQuote: function () {
            let randomQuote = this.quoteArray[Math.round(Math.random() * this.numQuotes)]

            /*
            reduces likely hood of seeing duplicate quotes in a row on short quote arrays
            
            randomeQuote can sometimes randomly be undefined on small arrays... don't know if should be computed or reactive due to how VUE handles value lifecycles
            
            don't care never done VUE and just yeeted out an options API quote machine this is a workaround for both dupes and undefined on them tiny arrays
            */
            if ((this.quote && randomQuote?.quote === this.quote) || !randomQuote) {
                randomQuote = this.quoteArray[Math.round(Math.random() * this.numQuotes)]
            }

            this.quote = randomQuote.quote
            this.author = randomQuote.author
            this.randomColor = this.randomColors()
        },
        randomColors: function () {
            return '#' + Math.floor(Math.random() * 16777215).toString(16)
        }
    },
    beforeMount() {
        this.loadQuotes()
    }
}
</script>

<template>
    <main id="app" :style="[{ color: randomColor }, { backgroundColor: randomColor }]">
        <div id="vue-quote-box" class="vue-quote-box">
            <p id="vue-text" class="vue-text"><i class="fa fa-quote-left"></i> {{ quote }}</p>
            <span id="vue-author" class="vue-author">- {{ author }}</span>
            <div class="vue-button-bar">
                <a
                    id="vue-tweet-quote"
                    class="vue-tweet-quote vue-icon"
                    :href="tweet"
                    :style="{ backgroundColor: randomColor }"
                    ><i class="fa fa-3x fa-twitter"></i
                ></a>
                <button
                    id="vue-new-quote"
                    class="vue-new-quote"
                    @click="getQuote"
                    :style="{ backgroundColor: randomColor }"
                >
                    New quote
                </button>
            </div>
        </div>
    </main>
</template>

<style scoped>
@import 'font-awesome';

body {
    margin: 0;
    font-family: sans-serif;
}

main {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

.vue-quote-box {
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    width: 500px;
}
.vue-text {
    font-size: 1.5rem;
    text-align: center;
    padding: 0 1rem 0 1rem;
}
.vue-author {
    text-align: right;
}
.vue-button-bar {
    display: flex;
    flex-direction: row;
    margin-top: 1.5rem;
}
.vue-tweet-quote {
    margin-right: auto;
    margin-left: 1rem;
}
.vue-icon {
    color: white;
    border-radius: 5px;
}
.vue-new-quote {
    color: white;
    padding: 10px 15px 10px 15px;
    border-radius: 10px;
    font-weight: bold;
}
</style>
