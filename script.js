window.onload = function() {

// html construction elements:
	let lb = '</div><div class="brackets">&lt;</div><div class="tagname">',
		rb = '</div><div class="brackets">&gt;</div>',
		br = '<p>&#13;</p>',
		clb = '<div class="brackets">&lt;</div><div class="slash">/</div><div class="tagname">',
		crb = rb+br,
		tab = '<div class="tab">&nbsp;&nbsp;</div>',
		tab2 = tab+tab,
		tab3 = tab2+tab,
		tab4 = tab3+tab,
		tab5 = tab4+tab
		;

// eancom construction elements
	let mainTagOpen,
		mainTagClose,
		unhOpen = lb+'uhn'+rb,
		unhClose = clb+'uhn'+crb,
		e0062Open = lb+'E0062'+rb,
		e0062Close = clb+'E0062'+crb,
		s009Open = lb+'S009'+rb,
		s009Close = clb+'S009'+crb,
		e0065Open = lb+'E0065'+rb,
		e0065Close = clb+'E0065'+crb,
		e0052Open = lb+'E0052'+rb,
		e0052Close = clb+'E0052'+crb,
		e0054Open = lb+'E0054'+rb,
		e0054Close = clb+'E0054'+crb,
		e0051Open = lb+'E0051'+rb,
		e0051Close = clb+'E0051'+crb,
		e0057Open = lb+'E0057'+rb,
		e0057Close = clb+'E0057'+crb,
		bgmOpen = lb+'BGM'+rb,
		bgmClose = clb+'BGM'+crb,
		c002Open = lb+'C002'+rb,
		c002Close = clb+'C002'+crb,
		e1001Open = lb+'E1001'+rb,
		e1001Close = clb+'E1001'+crb,
		c106Open = lb+'C106'+rb,
		c106Close = clb+'C106'+crb,
		e1004Open = lb+'E1004'+rb,
		e1004Close = clb+'E1004'+crb,
		e1225Open = lb+'E1225'+rb,
		e1225Close = clb+'E1225'+crb,
		dtmOpen = lb+'DTM'+rb,
		dtmClose = clb+'DTM'+crb,
		c507Open = lb+'C507'+rb,
		c507Close = clb+'C507'+crb,
		e2005Open = lb+'E2005'+rb,
		e2005Close = clb+'E2005'+crb,
		e2380Open = lb+'E2380'+rb,
		e2380Close = clb+'E2380'+crb,
		e2379Open = lb+'E2379'+rb,
		e2379Close = clb+'E2379'+crb,
		sg1Open = lb+'SG1'+rb,
		sg1Close = clb+'SG1'+crb,
		rffOpen = lb+'RFF'+rb,
		rffClose = clb+'RFF'+crb,
		c506Open = lb+'C506'+rb,
		c506Close = clb+'C506'+crb,
		sg3Open = lb+'SG3'+rb,
		sg3Close = clb+'SG3'+crb,
		nadOpen = lb+'NAD'+rb,
		nadClose = clb+'NAD'+crb,
		e3035Open = lb+'E3035'+rb,
		e3035Close = clb+'E3035'+crb,
		c082Open = lb+'C082'+rb,
		c082Close = clb+'C082'+crb,
		e3039Open = lb+'E3039'+rb,
		e3039Close = clb+'E3039'+crb,
		e3055Open = lb+'E3055'+rb,
		e3055Close = clb+'E3055'+crb,
		sg26Open = lb+'SG26'+rb,
		sg26Close = clb+'SG26'+crb,
		linOpen = lb+'LIN'+rb,
		linClose = clb+'LIN'+crb,
		e1082Open = lb+'E1082'+rb,
		e1082Close = clb+'E1082'+crb,
		e1229Open = lb+'E1229'+rb,
		e1229Close = clb+'E1229'+crb,
		c212Open = lb+'C212'+rb,
		c212Close = clb+'C212'+crb,
		e7140Open = lb+'E7140'+rb,
		e7140Close = clb+'E7140'+crb,
		e7143Open = lb+'E7143'+rb,
		e7143Close = clb+'E7143'+crb,
		piaOpen = lb+'PIA'+rb,
		piaClose = clb+'PIA'+crb,
		e4347Open = lb+'E4347'+rb,
		e4347Close = clb+'E4347'+crb,
		imdOpen = lb+'IMD'+rb,
		imdClose = clb+'IMD'+crb,
		e7077Open = lb+'E7077'+rb,
		e7077Close = clb+'E7077'+crb,
		c273Open = lb+'C273'+rb,
		c273Close = clb+'C273'+crb,
		e7008Open = lb+'E7008'+rb,
		e7008Close = clb+'E7008'+crb,
		qtyOpen = lb+'QTY'+rb,
		qtyClose = clb+'QTY'+crb,
		c186Open = lb+'C186'+rb,
		c186Close = clb+'C186'+crb,
		e6063Open = lb+'E6063'+rb,
		e6063Close = clb+'E6063'+crb,
		e6060Open = lb+'E6060'+rb,
		e6060Close = clb+'E6060'+crb,
		e6411Open = lb+'E6411'+rb,
		e6411Close = clb+'E6411'+crb,
		moaOpen = lb+'MOA'+rb,
		moaClose = clb+'MOA'+crb,
		c516Open = lb+'C516'+rb,
		c516Close = clb+'C516'+crb,
		e5025Open = lb+'E5025'+rb,
		e5025Close = clb+'E5025'+crb,
		e5004Open = lb+'E5004'+rb,
		e5004Close = clb+'E5004'+crb,
		sg30Open = lb+'SG30'+rb,
		sg30Close = clb+'SG30'+crb,
		priOpen = lb+'PRI'+rb,
		priClose = clb+'PRI'+crb,
		c509Open = lb+'C509'+rb,
		c509Close = clb+'C509'+crb,
		e5125Open = lb+'E5125'+rb,
		e5125Close = clb+'E5125'+crb,
		e5118Open = lb+'E5118'+rb,
		e5118Close = clb+'E5118'+crb,
		sg36Open = lb+'SG36'+rb,
		sg36Close = clb+'SG36'+crb,
		taxOpen = lb+'TAX'+rb,
		taxClose = clb+'TAX'+crb,
		e5286Open = lb+'E5286'+rb,
		e5286Close = clb+'E5286'+crb,
		c241Open = lb+'C241'+rb,
		c241Close = clb+'C241'+crb,
		e5153Open = lb+'E5153'+rb,
		e5153Close = clb+'E5153'+crb,
		c243Open = lb+'C243'+rb,
		c243Close = clb+'C243'+crb,
		e5278Open = lb+'E5278'+rb,
		e5278Close = clb+'E5278'+crb,
		unsOpen = lb+'UNS'+rb,
		unsClose = clb+'UNS'+crb,
		e0081Open = lb+'E0081'+rb,
		e0081Close = clb+'E0081'+crb,
		cntOpen = lb+'CNT'+rb,
		cntClose = clb+'CNT'+crb,
		c270Open = lb+'C270'+rb,
		c270Close = clb+'C270'+crb,
		e6069Open = lb+'E6069'+rb,
		e6069Close = clb+'E6069'+crb,
		untOpen = lb+'UNT'+rb,
		untClose = clb+'UNT'+crb,
		e0074Open = lb+'E0074'+rb,
		e0074Close = clb+'E0074'+crb
		;

// notifications


// get static elements
	let codeField = document.getElementById('code'),
		btnStart = document.getElementById('start'),
		btnCopy = document.getElementById('copy'),
		xmlDocument
		;


	function getData(){
// get dynamic data
		let docType = document.getElementsByName('doctype');	
		if(docType[0].checked){
			docType = docType[0].value;
			mainTagOpen = lb+docType+rb;
			mainTagClose = clb+docType+crb;
		}
		else if(docType[1].checked){
			docType = docType[1].value;
			mainTagOpen = lb+docType+rb;
			mainTagClose = clb+docType+crb;
		}
		else if(docType[2].checked){
			docType = docType[2].value;
			mainTagOpen = lb+docType+rb;
			mainTagClose = clb+docType+crb;
		}
		else {
			alert('pls select document type');
			return;
		}

		let docNumber = document.getElementById('doc-number').value,
			docDate = document.getElementById('date-doc').value,
			deliveryDate = document.getElementById('date-delivery').value,
			orderDate = document.getElementById('date-order').value,
			orderNumber = document.getElementById('order-number').value,
			distrGln = document.getElementById('gln-by'.value),
			supplierGln = document.getElementById('gln-su').value,
			deliveryPointGln = document.getElementById('gln-dt').value
			;
// creating eancom document matching it's typed, by sections
		function createEancom() {
			if(docType=='ordrsp'){
				xmlDocumentHeader = mainTagOpen+br+tab+unhOpen+br+tab2+e0062Open+'555666'+e0062Close+tab2+s009Open+br+tab3+e0065Open+docType+e0065Close+tab3+e0052Open+'D'+e0052Close+tab3+e0054Open+'01B'+e0054Close+tab3+e0051Open+'UN'+e0051Close+tab3+e0057Open+'ean007'+e0057Close+tab2+s009Close+tab+unhClose;
				xmlDocumentMain = tab+orderDate+br;
				xmlDocumentSummary = mainTagClose;
			}
			else if(docType=='desadv'){
				xmlDocumentHeader = mainTagOpen+br;
				xmlDocumentMain = tab+docNumber+br;
				xmlDocumentSummary = mainTagClose;
			}
			else if(docType=='recadv'){
				xmlDocumentHeader = mainTagOpen+br;
				xmlDocumentMain = tab+docNumber+br;
				xmlDocumentSummary = mainTagClose;
			}
			else {
				alert('something went really wrong! How did you do that??');
			}
		}
		createEancom();
		xmlDocument = xmlDocumentHeader+xmlDocumentMain+xmlDocumentSummary;
		codeField.innerHTML = xmlDocument;
 	}

 	

	
	btnStart.addEventListener('click', getData);

	btnCopy.addEventListener('click', function () {
	let codeCopy = document.getElementById('code'); 
	let range = document.createRange();
	range.selectNode(codeCopy); 
	window.getSelection().addRange(range);
	try { 
		document.execCommand('copy'); 
	} catch(err) { 
		console.log('Can`t copy, boss'); 
	}
	window.getSelection().removeAllRanges();
	});

}