/*
ĐỀ BÀI : 
.Tạo form cho input số đoạn văn bản cần tạo
. Nếu số >9 or <0 thì tạo 1 đoạn 
. Nếu số nhập là số thực (1.5, 3.75,...) chỉ lấy phần nguyên trước dấu phẩy
. Các trường hợp còn lại tạo đúng số lượng được nhập vào form
*/

/*
Giải:
dom tới các thẻ cần dom

*/
var text = [
    "Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.",
    "Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.",
    "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
    "Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. ",
    "This opera\'s as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry\'s worm infested bowels as if you were actually wriggling through them.You\'ve killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don\'t regret this, but I both rue and lament it. Morbo can\'t understand his teleprompter because he forgot how you say that letter that\'s shaped like a man wearing a hat.",
    "Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.",
    "Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven\'t heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.",
    "Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.",
    "Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.",
];


document.getElementById('btn-generate-paragraph').onclick = function(){
    // input
    var input = Number(document.getElementById('input').value);
    var content = document.getElementById('ketqua');
// Sẽ có 1 cái hàm để random số từ có trong đoạn text
    // Tạo biến để lưu các dom tới các thẻ
    // 
    var randomIndex =  Math.floor(Math.random() * text.length); // cái này sẽ cho ra một index random bất kì luôn được làm tròn thành số nguyên và luôn bé hơn độ dài của mảng text
    var x = input;

    // Kiểm tra điều kiện 0<x<9 hoặc x === 1
    if(x === 1 || x === 0 || x < 0 || x > 9){
        content.innerHTML = '<p class="result p-2">'+text[randomIndex]+'</p>';
    }
    else{
        var doanVan = '';
        x = Math.floor(x);
        for(var i=0;i<x;i++){
            doanVan += '<p class="result p-3">'+text[randomIndex]+'</p>';
        }
        content.innerHTML =doanVan;
    }
}
