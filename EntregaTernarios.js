console.log("\"Entrega Eventos\" pidiendo datos");

let personaje='';
const Personajes=[];
const Jugadores=[];

let poder=0;
let danio=0;
let nivel=0;
let vida=0;
let mana=0;
let armadura=0;
let resistencia=0;

let nickname='';

class Personaje{
    constructor(nombre){
        //propiedades
        this.nombre=nombre;
        poder=this.poder=5;
        danio=this.danio=10;
        nivel=this.nivel=1;
        vida=this.vida=100;
        mana= this.mana=100;
        armadura=this.armadura=10;
        resistencia=this.resistencia=10;
    }


        clase(Class){
            this.class=Class;
                switch(Class){
                    case 'mago': 
                        vida=vida+(parseInt(vida*0.2));
                        mana=mana+(parseInt(mana*0.4));
                        armadura+=5;
                        resistencia+=15;
                        poder+=15;
                        danio+=5;
                        Jugadores.push(`${nickname}`,`${Class}`,nivel,poder,danio,vida,mana,armadura,resistencia);


                        break;
                    case 'paladin':
                        vida=vida+(parseInt(vida*0.4));
                        mana=mana+(parseInt(mana*0.2));
                        armadura+=10;
                        resistencia+=5;
                        poder+=5;
                        danio+=15;
                        Jugadores.push(`${nickname}`,`${Class}`,nivel,poder,danio,vida,mana,armadura,resistencia);

                        break;
                    case 'monje':
                        vida=vida+(parseInt(vida*0.3));
                        mana=mana+(parseInt(mana*0.3));
                        armadura+=10;
                        resistencia+=10;
                        poder+=10;
                        danio+=10;
                        Jugadores.push(`${nickname}`,`${Class}`,nivel,poder,danio,vida,mana,armadura,resistencia);

                        break;
                }
            }
        recibirDanio(valor){
            this.vida=valor;
            switch(this.class){
                case 'mago':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
                case 'paladin':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
                case 'monje':
                this.vida=(this.vida-(valor-this.buff));
                return parseInt(this.vida);
            }
            this.vida=this.vida-(valor-this.buff);
        
        }
        atacar(valor){
            this.attak=valor;
            switch(this.class){
                case 'mago':
                    this.attak=(valor+(danio*0.2));
                    return parseInt(this.attak);
                case 'paladin':
                    this.attak=(valor+(danio*0.5));
                    return parseInt(this.attak);
                case 'monje':
                    this.attak=(valor+(danio*0.3));
                    return parseInt(this.attak);
                default:
                    this.attak=(valor+(danio*0.3));
                    return parseInt(this.attak);
            }
        }
        lanzarHechizo(valor){
            this.spell=valor;
            switch(this.class){
                case 'mago':
                    this.spell=(valor+(poder*0.5));
                    return parseInt(this.spell);
                case 'paladin':
                    this.spell=(valor+(poder*0.2));
                    return parseInt(this.spel);
                case 'monje':
                    this.spell=(valor+(poder*0.3));
                    return parseInt(this.spell);
                default:
                    this.spell=(valor+(poder*0.3));
                    return parseInt(this.spell);
            }
        }
        recibirCura(valor){
            this.vida=(this.vida+valor)
        }
        resistenciaFisica(valor){
            this.buff=valor;
            switch(this.class){
                case 'mago':
                    this.buff=(valor-(armadura*0.2));
                    return (this.buff);
                case 'paladin':
                    this.buff=(valor-(armadura*0.5));
                    return (this.buff);
                case 'monje':
                    this.buff=(valor-(armadura*0.3));
                    return (this.buff);
                default:
                    this.buff=(valor-(armadura*0.3));
                    return (this.buff);
            }
            
        }
        resistenciaMagica(valor){
            this.buff=valor;
            switch(this.class){
                case 'mago':
                    this.buff=(valor-(resistencia*0.5));
                    return parseInt(this.buff2);
                case 'paladin':
                    this.buff=(valor-(resistencia*0.2));
                    return parseInt(this.buff2);
                case 'monje':
                    this.buff=(valor-(resistencia*0.3));
                    return parseInt(this.buff2);
                default:
                    this.buff=(valor-(resistencia*0.3));
                    return parseInt(this.buff2);
            }
        }
        lanzarCura(valor){
            this.heal=valor;
            switch(this.class){
                case 'mago':
                    this.heal=(valor+(poder*0.2));
                    return parseInt(this.heal);
                case 'paladin':
                    this.heal=(valor+(poder*0.3));
                    return parseInt(this.heal);
                case 'monje':
                    this.heal=(valor+(poder*0.5));
                    return parseInt(this.heal);
                default:
                    this.heal=(valor+(poder*0.3));
                    return parseInt(this.heal);
            }
        }
        subirNivel(){
            this.nivel++;
            if(this.nivel>=4){
                switch(this.class){
                    case 'mago':
                        this.vida=vida+(parseInt(vida*0.2));
                        this.mana=mana+(parseInt(mana*0.4));
                        this.armadura+=5;
                        this.resistencia+=15;
                        this.poder+=15;
                        this.danio+=5;
              

                        break;
                    case 'paladin':
                        this.vida=vida+(parseInt(vida*0.4));
                        this.mana=mana+(parseInt(mana*0.2));
                        this.armadura+=15;
                        this.resistencia+=5;
                        this.poder+=5;
                        this.danio+=15;
                       
                        break;
                    case 'monje':
                        this.vida=vida+(parseInt(vida*0.3));
                        this.mana=mana+(parseInt(mana*0.3));
                        this.armadura+=10;
                        this.resistencia+=10;
                        this.poder+=10;
                        this.danio+=10;
                       
                        break;
                    default: 
                        this.vida=vida+(parseInt(vida*0.3));
                        this.mana=mana+(parseInt(mana*0.3));
                        this.armadura+=10;
                        this.resistencia+=10;
                        this.poder+=10;
                        this.danio+=10;
                       
                }
            }  else{
                    this.vida=vida+(parseInt(vida*0.2));
                    this.mana=mana+(parseInt(mana*0.2));
                    this.armadura+=5;
                    this.resistencia+=5;
                    this.poder+=5;
                    this.danio+=5;
                    
                }
        }


};


loadFromLocalStorage()

function loadFromLocalStorage() {
    const PJ=localStorage.getItem('Jugadores')?localStorage.getItem('Jugadores'):false;
    PJ?PJaceptado():volver();
    const PJparse=JSON.parse(PJ);
    Jugadores.push(PJparse);
    const jugador1=new Personaje(J=PJparse)
    console.log(jugador1);
    //console.log(PJ);
    //console.log(personaje);
 
}
    

const crearPJ=document.getElementById('crearPJ') ? document.getElementById('crearPJ').addEventListener('click', creacionPersonaje):[];

//si no uso este if me tira error cuando el boton no existe en la UI
function creacionPersonaje(){
    console.log('creandoPJ');
    clearUI()
    pantallaCreacion()
};
const options=document.getElementById('options') ? document.getElementById('options').addEventListener('click', opciones):[];




function clearUI() {
    const welcome=document.getElementById('welcome')
    welcome.innerHTML=''
}

function pantallaCreacion() {
    const creacionpj=document.getElementById('welcome')
    creacionpj.innerHTML=`<h1>Creacion de Personaje</h3>
    <div id="root">Elegir Nombre: <input type="text" id='name'/><div id=elegirclase></div></div>`

    const nameInput=document.getElementById("name");
    nameInput.addEventListener('change', createClassPJ);

    function createClassPJ() {
        console.log('Eligiendo Clase Para '+ this.value);
        nickname=this.value;
        const clase=document.getElementById('elegirclase')
        clase.innerHTML=`<li>Elegir Clase: </li>
        <button id="ClaseMago">Mago</button><div id="mago"></div></br>
    
        <button id="ClasePaladin">Paladin</button><div id="paladin"></div></br>
    
        <button id="ClaseMonje">Monje</button></br><div id="monje"></div>
    
        <button id="acceptPJ">ACEPTAR</button><button id="back">VOLVER</button>`;
    
        const magoButton=document.getElementById("ClaseMago")
        const mago=document.getElementById("mago")
        magoButton.addEventListener('click', elegirClaseMago)
        
        function elegirClaseMago() {
            Personajes.length=0;
            Jugadores.length=0;
            Personajes.push(personaje=new Personaje(nickname));
            personaje.clase('mago')
            console.log(Jugadores);
            paladin.innerHTML='';
            monje.innerHTML='';
            mago.innerHTML=`Atributos: <div id="atributosMago"></div>`;
            const atributos=document.getElementById('atributosMago');
            atributos.innerHTML=`<li>poder: ${poder}</li> <li>danio: ${danio}</li> <li>vida: ${vida}</li>  
            <li>mana: ${mana}</li> <li>armadura:${armadura}</li> <li>resistencia:${resistencia}</li>`;
            
            
        }
        const paladinButton=document.getElementById("ClasePaladin")
        const paladin=document.getElementById("paladin")
        paladinButton.addEventListener('click', elegirClasePaladin)
      
        function elegirClasePaladin() {
            Personajes.length=0;
            Jugadores.length=0;
            Personajes.push(personaje=new Personaje(nickname));
            personaje.clase('paladin')
            console.log(Jugadores);
            mago.innerHTML='';
            monje.innerHTML='';
            paladin.innerHTML=`Atributos: <div id="atributosPaladin"></div>`;
            const atributos=document.getElementById('atributosPaladin');
            atributos.innerHTML=`<li>poder: ${poder}</li> <li>danio: ${danio}</li> <li>vida: ${vida}</li>  
            <li>mana: ${mana}</li> <li>armadura:${armadura}</li> <li>resistencia:${resistencia}</li>`;
        }
        const monjeButton=document.getElementById("ClaseMonje")
        const monje=document.getElementById("monje")
        monjeButton.addEventListener('click', elegirClaseMonje)

        function elegirClaseMonje() {
            Personajes.length=0;
            Jugadores.length=0;
            Personajes.push(personaje=new Personaje(nickname));
            personaje.clase('monje')
            console.log(Jugadores);
            paladin.innerHTML='';
            mago.innerHTML='';
            monje.innerHTML=`Atributos: <div id="atributosMonje"></div>`;
            const atributos=document.getElementById('atributosMonje');
            atributos.innerHTML=`<li>poder: ${poder}</li> <li>danio: ${danio}</li> <li>vida: ${vida}</li>  
            <li>mana: ${mana}</li> <li>armadura:${armadura}</li> <li>resistencia:${resistencia}</li>`;
            
        }
        
        const accept=document.getElementById("acceptPJ")
        accept.addEventListener('click', aceptar)
        function aceptar() {
            saveToLocalStorage();
            clearUI()
            PJaceptado()
        
        }
        const back = document.getElementById("back");
        back.addEventListener('click', volver);
       
    }
   
}
function volver() {
    Personajes.length=0;
    Jugadores.length=0;
    const back=document.getElementById('welcome')
    back.innerHTML=`
        <h1>Bienvenido Aventurero!</h1>
        <div id="opciones">
            <li><button id="crearPJ">Crear Personaje</button></li>
            <li><button id="options">Opciones</button></li>
            <li><button id="credits">Creditos</button></li>
        </div>`;
    const crearPJ=document.getElementById('crearPJ');
    crearPJ.addEventListener('click', creacionPersonaje);
    const credits=document.getElementById('credits');
    credits.addEventListener('click', creditos)
    const options=document.getElementById('options');
    options.addEventListener('click', opciones)
}
function opciones() {
    console.log('options');
    clearUI
    const opciones=document.getElementById('welcome')
    opciones.innerHTML=`
        <h1>Opciones</h1>
        <div id="opciones">
            <li><button id="volume">Volumen</button></li>
            <li><button id="deletePJ">Borrar Personaje</button></li>
            <li><button id="volver">Volver</button></li>
        </div>`;
    const vuelta = document.getElementById("volver");
    const PJ=localStorage.getItem('Jugadores') ? vuelta.addEventListener('click', PJaceptado) : vuelta.addEventListener('click', volver);
   
    

}
function creditos() {
    clearUI();
    const cred = document.getElementById('welcome');
    cred.innerHTML=`
        <h1>CREDITOS</h1>
        <div id="credits">
            <li></li>
            <li></li>
            <li><button id="volver">Volver</button></li>
        </div>`;
        const vuelta = document.getElementById("volver");
        const PJ=localStorage.getItem('Jugadores') ? vuelta.addEventListener('click', PJaceptado) : vuelta.addEventListener('click', volver);
}


function PJaceptado() {
    clearUI()
    const PJCreated=document.getElementById('welcome')
    PJCreated.innerHTML=`
            <h1>Bienvenido Aventurero!</h1>
            <div id="opciones">
                <li><button id="startGame">Comenzar Juego</button></li>
                <li><button id="options">Opciones</button></li>
                <li><button id="credits">Creditos</button></li>
            </div>`;
    
    const options=document.getElementById('options');
    options.addEventListener('click', opciones)
    const credits=document.getElementById('credits');
    credits.addEventListener('click', creditos)
}

function saveToLocalStorage() {
    const PJ=JSON.stringify(Jugadores);
    localStorage.setItem('Jugadores', PJ);
}
