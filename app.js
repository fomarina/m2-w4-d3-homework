Vue.component('nav-bar', {
    template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Food Blog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Recipes</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Lifestyles</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Videos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                </ul>
            </div>
        </nav>
    `
});

Vue.component('chili-image', {
    template: `
        <aside id="photos">
            <img :src="imageSrc" alt="White Chicken Chili" width="180">
        </aside>
    `,
    data() {
        return {
            imageSrc: "images/chili.jpg"
        };
    }
});

new Vue({
    el: '#app',
    data: {
        showProfile: false,
        selectedAuthor: {},
        comments: [
            {
                author: 'Brianna',
                date: 'February 18, 2021 @ 3:30 pm',
                text: "Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin...",
                profileImage: 'profile.png',
                foodieLevel: "Novice",
                bio: "Food enthusiast. Love to cook and experiment. Into only organic, fat-free, sugar-free stuffs!"
            },
            {
                author: 'LINH',
                date: 'February 15, 2021 @ 9:46 am',
                text: "I just made this soup today and it’s so tasty!...",
                profileImage: 'profile.png',
                foodieLevel: "Newcomer",
                bio: "Love food! Grew up with meat and potatoes..."
            },
            {
                author: 'CATHERINE LEONARDO',
                date: 'February 13, 2021 @ 12:58 pm',
                text: "I LOVE this White Chicken Chili! ...",
                profileImage: 'profile.png',
                foodieLevel: "Mentor",
                bio: "I have to say I never was the adventurous type until 2 years ago..."
            },
            {
                author: 'KALI',
                date: 'February 13, 2021 @ 11:31 am',
                text: "This recipe is dynamite!...",
                profileImage: 'profile.png',
                foodieLevel: "Novice",
                bio: "Food is my passion. So is cooking. I love to experiment and try new things."
            }
        ]
    },
    methods: {
        openProfile(comment) {
            this.selectedAuthor = {
                name: comment.author,
                foodieLevel: comment.foodieLevel,
                bio: comment.bio
            };
            this.showProfile = true;
        },
        closeProfile() {
            this.showProfile = false;
        }
    }
});
