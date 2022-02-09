//home page
const signInBtn ='.nav-link[href="#login"]'
const usernameLbl ='ul :nth-child(4) a'
const newPostLink='[href="#editor"]'

//Login Page
const emailTxtBox='input[type="email"]'
const passwordTxtBox='input[type="password"]'
const submitBtn='[type="submit"]'

//New Post Page
const articleTitleTxt='input[placeholder="Article Title"]'
const articleAboutTxt='input[placeholder*="about"]'
const articleBodyTxt='textarea[placeholder*="mark"]'
const articleTagsTxt='input[placeholder*="tags"]'
const submitArticleBtn='button'

//Post Page
const editBtn ='.btn.btn-outline-secondary.btn-sm'

class testObject{
    static launch(){
        cy.viewport(1080,600)
        cy.visit('https://react-redux.realworld.io')
        this.login()
    }

    static login(){
        cy.get(signInBtn).click()
        //use of custome command
        cy.loginWithCred(emailTxtBox,passwordTxtBox,submitBtn,'kishorekumartbm@gmail.com','Tambaram@82')
    }

    static verifyLogin(){
        cy.get(usernameLbl).should('contain','kishore')
    }

    static clickOnNewPost(){
        cy.get(newPostLink).click()
    }

    static createNewPost(){
            cy.fixture('post').then((post) =>{
            
            const posttitle = post.title
            const postabout = post.about
            const postbodofpost = post.bodyOfPost
            const posttags = post.tags
            cy.get(articleTitleTxt).type(posttitle)
            cy.get(articleAboutTxt).type(postabout)
            cy.get(articleBodyTxt).type(postbodofpost)
            cy.get(articleTagsTxt).type(posttags)
        })
        cy.get(submitArticleBtn).click()
    }

    static vrifyThePost(){
        cy.fixture('post').then((post) =>{
            const posttitle = post.title
            cy.get('h1').should('contain',posttitle)
        })
//        cy.get('h1').should('contain','new Title2')
    }

    static updateThePost(){
        cy.get(editBtn).click()
        cy.wait(5000)
        //cy.get(articleTitleTxt).type('updated')
        cy.fixture('post').then((post) =>{
            
            const posttitle= post.title
            const postabout = post.about
            const postbodofpost = post.bodyOfPost
            const posttags = post.tags
            cy.get(articleTitleTxt).type(posttitle)
            cy.get(articleAboutTxt).type(postabout)
            cy.get(articleBodyTxt).type(postbodofpost)
            cy.get(articleTagsTxt).type(posttags)
        })
        cy.get(submitArticleBtn).click()
    }

    static verifyTheUpdatedPost(){
        cy.fixture('post').then((post) =>{
            const posttitle = post.title
            cy.get('h1').should('contain','updated')
        })
    }
}

export default testObject