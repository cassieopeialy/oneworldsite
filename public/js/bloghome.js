/// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwNmokmjDKSxQUIj-F02mR8zE9VfvIARk",
  authDomain: "oneworld-site.firebaseapp.com",
  projectId: "oneworld-site",
  storageBucket: "oneworld-site.appspot.com",
  messagingSenderId: "42898737761",
  appId: "1:42898737761:web:59bf707c58dab8b30bf820"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import { getFirestore, doc, getDocs, getDoc, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

const db = getFirestore();

// Init Firebase app
initializeApp(firebaseConfig);

let blogId = decodeURI(window.location.pathname.split("/").pop());

let docRef = doc(db, "blogs", blogId);
let docSnap = await getDoc(docRef);


const setupBlog = (data) => {
    const banner = document.querySelector('.banner-blog');
    const blogTitle = document.querySelector('.blog-title');
    const titleTag = document.querySelector('title');
    const publish = document.querySelector('.published');

    banner.style.backgroundImage = `url(${data.bannerImage})`;

    titleTag.innerHTML += blogTitle.innerHTML = data.title;
    publish.innerHTML += data.publishedAt;

    const article = document.querySelector('.article');
    addArticle(article, data.article);
}

const addArticle = (ele, data) => {
    data = data.split("\n").filter(item => item.length);
    //console.log(data);

    data.forEach(item => {
        if(item[0] == '#'){
            let hCount = 0;
            let i = 0;
            while(item[i] == '#'){
                hCount++;
                i++;
            }
            let tag = `h${hCount}`;
            ele.innerHTML += `<${tag}>${item.slice(hCount, item.length)}</${tag}>`
        }
        else if(item[0] == "!" && item[1] == "["){
            let seperator;

            for(let i = 0; i <= item.length; i++){
                if(item[i] == "]" && item [i + 1] == "(" && item[item.length - 1] == ")"){
                    seperator = i;
                }
            }

            let alt = item.slice(2, seperator);
            let src = item.slice(seperator + 2, item.length - 1);
            ele.innerHTML += `
            <img src="${src}" alt="${alt}" class="article-image">
            `;
        }

        else{
            ele.innerHTML += `<p>${item}</p>`
        }
    })
}



if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  setupBlog(docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}


const blogSection = document.querySelector('.blogs-section');
console.log(blogSection);

getDocs(collection(db, "blogs")).then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(window.location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
            <img src="${data.bannerImage}" class="blog-image" alt="">
            <h1 class="blog-h1"> ${data.title.substring(0, 100)} </h1>
            
            <a href="/${blog.id}" > Read More </a>
        </div> `;
}


//Variables
const menuBar = document.querySelector(".menu-bar img");
const tabs = document.querySelector(".tabs");
const xBar = document.getElementById("menu-img");





console.log("blog.js works");
