 const myFunctions = {
     /**
     * Returns st as a url
     * 
     * Converts the spaces in st and puts "https://" before it
     * 
     * @param {string} st
     * @returns string fin
     */
    makeLink: (st) =>{
        let fin=""
        for(element of st){
            if(element==" ")
                fin+="_"
            else
                fin+=element
        }
        return "https://"+fin;
    },
    /**
     * Returns st backwards
     * 
     * iterates through in reverse order and appends each character to a new string
     * 
     * @param {string} st
     * @returns string reversal
     */
    reverse:(st) => {
        let reversal=""
        for(let x=st.length-1; x>=0; x--){
            reversal+=st[x]
        }
        return reversal
    },
    /**
     * Breaks up st based on colons and prints each category on a new line
     * 
     * iterates through st and adds a new line after every : and two new lines after every ,
     * 
     * @param {string} st
     * @returns string categorized
     */
    categories:(st) =>{
        let categorized=""
        for(element of st){
            if(element==":"){
                categorized+=element+"\n"
            }
            else if(element==",")
                categorized+="\n\n"
            else
                categorized+=element
        }
        return categorized
    },
    /**
     * Returns number of each capital letter in st
     * 
     * Records how many of each capital letter is found by iterating and using two arrays
     * 
     * @param {string} st
     * @returns string fin
     */
    cappedLetters:(st)=>{
        const sent=st;
        let found = sent.match(/[A-Z]/g);
        let capitals=[]
        let number=[]

        for(element of found){
            if(capitals.includes(element)){
                let y=capitals.indexOf(element)
                number[y]++
            }
            else{
                capitals.push(element)
                number.push(1)
            }   
        }

        let fin=""
        for(let x=0; x<capitals.length; x++){
            fin+=capitals[x]+": "+number[x]+", "
        }
        return fin.substring(0, fin.length-2)
    },
    /**
     * Returns number of each lowercase letter in st
     * 
     * Records how many of each lowercase letter is found by iterating and using two arrays
     * 
     * @param {string} st
     * @returns string fin
     */
    lowerLetters:(st)=>{
        const sent=st;
        let found = sent.match(/[a-z]/g);
        let lowers=[]
        let number=[]

        for(element of found){
            if(lowers.includes(element)){
                let y=lowers.indexOf(element)
                number[y]++
            }
            else{
                lowers.push(element)
                number.push(1)
            }   
        }

        let fin=""
        for(let x=0; x<lowers.length; x++){
            fin+=lowers[x]+": "+number[x]+", "
        }
        return fin.substring(0, fin.length-2)
    },
    /**
     * Sorts the words in st in alphabetical ASCII order
     * 
     * Splits st by space, iterates and looks for word with lowest ascii value, and adds them in order to a new array and string
     * 
     * @param {string} st
     * @returns string fin
     */
    sort:(st)=>{
        let splitter=st.split(" ");
        let short=splitter[0];
        let sorted=[];
        let len=splitter.length;
        while(sorted.length<len){
            for(let x=1; x<splitter.length; x++)
            {
                if(splitter[x]<short)
                    short=splitter[x]
            }
            sorted.push(short);
            let updated=[]
            for(element of splitter){
                if(element!=short)
                    updated.push(element)
            }
            splitter=updated;
            short=splitter[0]
        }
        let fin=""
        for(element of sorted)
            fin+=element+" "
        fin=fin.substring(0, fin.length-2)
        return fin;        
    },
    /**
     * Sorts the words in st in reverse alphabetical ASCII order
     * 
     * Splits st by space, iterates and looks for word with highest ascii value, and adds them in order to a new array and string
     * 
     * @param {string} st
     * @returns string fin
     */
    sortBackwards:(st)=>{
        let splitter=st.split(" ");
        let long=splitter[0];
        let sorted=[];
        let len=splitter.length;
        while(sorted.length<len){
            for(let x=1; x<splitter.length; x++)
            {
                if(splitter[x]>long)
                    long=splitter[x]
            }
            sorted.push(long);
            let updated=[]
            for(element of splitter){
                if(element!=long)
                    updated.push(element)
            }
            splitter=updated;
            long=splitter[0]
        }
        let fin=""
        for(element of sorted)
            fin+=element+" "
        fin=fin.substring(0, fin.length-2)
        return fin;        
    },
    /**
     * Formats a series of numbers as a phone number
     * 
     * Checks if the series has 10 or 11 numbers, and then puts -'s in the right place
     * 
     * @param {string} st
     * @returns string fin
     */
    phoneNumber:(st)=>{
        let fin=""
        if(st[0]!=1)
            fin+=st[0]+st[1]+st[2]+"-"+st[3]+st[4]+st[5]+"-"+st[6]+st[7]+st[8]+st[9];
        else
            fin+="1-"+st[1]+st[2]+st[3]+"-"+st[4]+st[5]+st[6]+"-"+st[7]+st[8]+st[9]+st[10];
        return fin;
    },
    /**
     * Breaks up st based on commas, sorts in alphabetical ascii order, and prints each category on different lines
     * 
     * splits st by ",", iterates and sorts based on lowest ascii value of each category, and adds new lines after each category
     * 
     * @param {string} st
     * @returns string fin
     */
    sortCategories:(st)=>{
        let splitter=st.split(",")
        let cats=[]
        for(element of splitter){
            cats.push(element)
        }
        let short=cats[0];
        let sorted=[];
        let len=cats.length;
        while(sorted.length<len){
            for(let x=1; x<cats.length; x++)
            {
                if(cats[x]<short)
                    short=cats[x]
            }
            sorted.push(short);
            let updated=[]
            for(element of cats){
                if(element!=short)
                    updated.push(element)
            }
            cats=updated;
            short=cats[0]
        }
        let fin=""
        for(element of sorted){
            if(element.includes(":"))
            {
                splitter=element.split(":")
                fin+=splitter[0]+":\n"+splitter[1]+"\n\n"
            }
        }
        return fin.substring(0, fin.length-2);
    },
    /**
     * Breaks up st based on commas, sorts in reverse alphabetical ascii order, and prints each category on different lines
     * 
     * splits st by ",", iterates and sorts based on highest ascii value of each category, and adds new lines after each category
     * 
     * @param {string} st
     * @returns string fin
     */
    sortCategoriesBackwards:(st)=>{
        let splitter=st.split(",")
        let cats=[]
        for(element of splitter){
            cats.push(element)
        }
        let long=cats[0];
        let sorted=[];
        let len=cats.length;
        while(sorted.length<len){
            for(let x=1; x<cats.length; x++)
            {
                if(cats[x]>long)
                    long=cats[x]
            }
            sorted.push(long);
            let updated=[]
            for(element of cats){
                if(element!=long)
                    updated.push(element)
            }
            cats=updated;
            long=cats[0]
        }
        let fin=""
        for(element of sorted){
            if(element.includes(":"))
            {
                splitter=element.split(":")
                fin+=splitter[0]+":\n"+splitter[1]+"\n\n"
            }
        }
        return fin.substring(0, fin.length-2);
    },
    /**
     * Trims the end of st by 2 chars
     * 
     * uses substring to delete the last 2 chars from st
     * 
     * @param {string} st
     * @returns string st
     */
    removeExtra2:(st)=>{
        return st.substring(0, st.length-2);
    }
}
module.exports=myFunctions;
