import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite'

// optimized approach of sample code of appwrite
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client);
    }

    // signup
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name) // here the first parameter of create() must be a uniqueId

            if(userAccount){
                // call another method
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    // signin
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // check user loggedIn or Not
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error
            // console.log("Appwrite service error", error)
        }

        return null;
    }

    // logout
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();
export default authService