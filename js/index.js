var texto = `
<html>
        <head>   <title>Gulliver Traveller - Roteiros</title> </head> 
        <body>
            <b>->1 - Roteiros para *São Paulo*</b>

            <br>
            A Terra da Garoa!
            <br>
            Fundada em 25 de janeiro de 1554, a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil. Aqui vão três dicas de roteiros obrigatórios para aqueles que passam pela capital paulista
            <br>
            #Roteiro A | Região: Avenida Paulista
            <br>
            MASP; Parque Trianon; Rua Augusta
            <br>
            #Roteiro B | Região: Centro
            <br>
            Catedral da Sé; Pátio do Colégio; Rua Augusta
            <br>
            #Roteiro C | Região: Vila Madalena
            <br>
            Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila
            <br>
            <b>->2 - Roteiros para *Las Vegas*</b>

            <br>Viva Las Vegas!<br>
            A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905. É considerada oficialmente como uma cidade desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!
            <br>
            #Roteiro A | Região: Las Vegas Boulevard South
            <br>
            Fonte do Bellagio; Principais Cassinos; Madame Tussauds
            <br>
            #Roteiro B | Região: Downtown
            <br>
            ;Fremont; Las Vegas Art Museum; Museu Nacional do Crime Organizado; 
            <br>
            #Roteiro C | Região: Las Vegas Boulevard North
            <br>
            Outlet Premium North; Stratosphere; Apple Fashion Show
            <br>
            <b>->3 - Roteiros para *Moscou*</b>

            <br>
            Privet!
            <br>
            A capital russa fica situada às margens do Rio Moscou e, apesar de ser a cidade mais cosmopolita da Rússia, grande parte de sua história está preservada
            <br>
            #Roteiro A | Região: Praça Vermelha
            <br>
            Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin
            <br>
            #Roteiro B | Região: Centro
            <br>
            Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou
            <br>
            #Roteiro C | Região: Obras pela cidade
            <br>
            Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station 
            <br>
        </body>
    </html>
</body>`;

// Nome das cidades Avaliadas

document.write(`<h1>As cidades avaliadas Foram :</h1>`);

// São Paulo

var nomecidades = texto.substr(130,9);
document.write(  '<h4> 1 - ' +nomecidades +'</h4> ');
// Las Vegas
var nomecidades = texto.substr(953,10);
document.write('<h4> 2 - ' +nomecidades +'</h4> ');
// Moscou
var nomecidades = texto.substr(1758,6);
document.write('<h4> 3 - ' +nomecidades +'</h4>');



// Roteiro de cada A cidade
document.write("<h1>Os Roteiros A das cidades Foram :</h1> ");

// São Paulo
var roteiroAsp = texto.substr(487,88);
document.write(" <h4>O Roteiro A da cidade de São Paulo Foi : " + roteiroAsp +"</h4>");
// Las Vegas
var roteiroAsp = texto.substr(1268,131);
document.write(" <h4>O Roteiro A da cidade de Las Vegas Foi : " + roteiroAsp +"</h4>");
// Moscou
var roteiroAsp = texto.substr(2031,135);
document.write(" <h4>O Roteiro A da cidade de Moscou Foi : " + roteiroAsp +"</h4>");


//locais citados no roteiro A de cada cidade
document.write("<h1>locais citados no roteiro A de cada cidade</h1>");

// São Paulo
// LOCAL 
var localAsp = texto.substr(541,34);
document.write(" <h4> São Paulo - : " + localAsp +"</h4>");



// Las Vegas
// LOCAL 
var localAls = texto.substr(1331,56);
document.write(" <h4> Las Vegas - : " + localAls +"</h4>");

// Moscou
var localAmoscou = texto.substr(2071,100);
document.write(" <h4> Moscou -   :" + localAmoscou +"</h4>");

// Pontos turísticos localizados no bairro Centro da cidade de São Paulo
document.write('<h1> Pontos turísticos localizados no bairro Centro da cidade de São Paulo </h1>');
var turisticosp = texto.substr(661, 46);
document.write('<h4> O Ponto Turistico da cidade de São Paulo é :' + turisticosp + '</h4>');

// Pontos turísticos localizados no bairro Downtown da cidade de Los Angeles 
document.write("<h1>Pontos turísticos localizados no bairro Downtown da cidade de Los Angeles</h1>")

var turisticodowntown= texto.substr(1476, 66);
document.write('<h4>Pontos turísticos localizados no bairro Downtown da cidade de Los Angeles : ' + turisticodowntown + '</h4>')