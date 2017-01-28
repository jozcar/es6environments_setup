 class BuildMarkUp{
    constructor(data){
       this.data = data;
    }

    get build(){
        let tpl = '';
       for(let i = 0; i < this.data.length; i++ ){
           tpl = tpl + this.template(i);
       }
       return tpl;
    }
    template(i){
        let markup = `
        <div class="col-lg-3">
        <div class="well">
            <div class="text-center"><img class="img-circle" src=${this.data[i].img}/>
              <h2>${this.data[i].name}</h2>
            </div>
            <p style=" font-weight: bold" class="success">Title: ${this.data[i].job}</p>
            <p><span style=" font-weight: bold">Works:</span> ${this.data[i].city }</p>
            <p><span style=" font-weight: bold">Hobby:</span> ${this.data[i].bio }</p>
        </div>
        </div>
        `;
        return markup;
    }
}
export default BuildMarkUp;