export class User{

    private userName: String;
    private password: String;
    private affect : number = 0;

    constructor(){}
    
    /**
     * isConseiller
     */
    public isConseiller() {
        if(this.userName == "conseiller"){
            this.affect = 1;
        }
    }
    public isClient() {
        if(this.userName == "client"){
            this.affect = 2;
        }
    }
    public isManager() {
        if(this.userName == "manager"){
            this.affect = 3;
        }
    }

}