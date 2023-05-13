class DirectAddressTable
{
    constructor(size)
    {
      //I am using Array for representing the table
      this.DAT  = new Array(size).fill(null);
    }
    //Operations
    insert(x)
    {
        if(x.key < this.DAT.length - 1 && x.key>-1 && this.DAT[x.key] === null){
            console.log(`${x.sateliteData} with key ${x.key} has been inserted`);
            this.DAT[x.key] = x ; 
        }
        else console.log("Inserting not possible");
    }
    search(k)
    {
        if(k < this.DAT.length - 1 && k > -1 && this.DAT[k]!=null){
            console.log(this.DAT[k],"has been found");
            return this.DAT[k];
        }
        else console.log("Not possible to search");     
    }
    delete(x)
    {
        if(x.key < this.DAT.length - 1 && x.key>-1 && this.DAT[x.key]!=null){
            console.log(`${x.sateliteData} with key ${x.key} has been deleted`);
            this.DAT[x.key] = null; 
        }
        else console.log("Deletion not possible");
    }

}
//Usage
const dat = new DirectAddressTable(10);
const x ={
    key: 1,
    sateliteData: "This is satelite data"
}
const y ={
    key: 1,
    sateliteData: "This is satelite data"
}
dat.insert(x);
dat.insert(y);
dat.search(1);
dat.search(0);
dat.delete(y);
dat.search(0);