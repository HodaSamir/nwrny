  var Currency = {
    rates: {"USD":1.0,"EUR":1.12955,"GBP":1.28932,"CAD":0.755189,"ARS":0.0259186,"AUD":0.714305,"BRL":0.270183,"CLP":0.00151075,"CNY":0.147746,"CYP":0.397899,"CZK":0.0443005,"DKK":0.151574,"EEK":0.0706676,"HKD":0.127418,"HUF":0.00353613,"ISK":0.00842424,"INR":0.014013,"JMD":0.00748616,"JPY":0.00905181,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0517991,"NZD":0.686364,"NOK":0.115786,"PLN":0.260604,"SGD":0.734388,"SKK":21.5517,"SIT":175.439,"ZAR":0.0709058,"KRW":0.000887892,"SEK":0.107627,"CHF":0.994911,"TWD":0.0324063,"UYU":0.0306516,"MYR":0.244768,"BSD":1.0,"CRC":0.00164482,"RON":0.238071,"PHP":0.0190925,"AED":0.272294,"VEB":0.000100125,"IDR":7.06775e-05,"TRY":0.189466,"THB":0.0319334,"TTD":0.148213,"ILS":0.276094,"SYP":0.00194108,"XCD":0.370572,"COP":0.000319386,"RUB":0.0149993,"HRK":0.152149,"KZT":0.00265028,"TZS":0.000429624,"XPT":805.181,"SAR":0.266667,"NIO":0.0306138,"LAK":0.000116516,"OMR":2.60078,"AMD":0.00205124,"CDF":0.000636748,"KPW":0.00111111,"SPL":6.0,"KES":0.00998102,"ZWD":0.00276319,"KHR":0.000251275,"MVR":0.0638324,"GTQ":0.129277,"BZD":0.496294,"BYR":4.63034e-05,"LYD":0.717693,"DZD":0.0083483,"BIF":0.000567871,"GIP":1.28932,"BOB":0.145336,"XOF":0.00172198,"STD":4.61891e-05,"NGN":0.00276624,"PGK":0.297593,"ERN":0.0666667,"MWK":0.00137173,"CUP":0.0377358,"GMD":0.0201816,"CVE":0.0102435,"BTN":0.014013,"XAF":0.00172198,"UGX":0.000272413,"MAD":0.104803,"MNT":0.000382923,"LSL":0.0709058,"XAG":15.7943,"TOP":0.429967,"SHP":1.28932,"RSD":0.00954735,"HTG":0.0121629,"MGA":0.000279732,"MZN":0.0160808,"FKP":1.28932,"BWP":0.0939002,"HNL":0.041057,"PYG":0.00016477,"JEP":1.28932,"EGP":0.05707,"LBP":0.00066335,"ANG":0.559553,"WST":0.378706,"TVD":0.714305,"GYD":0.00479528,"GGP":1.28932,"NPR":0.00871729,"KMF":0.00229597,"IRR":2.37953e-05,"XPD":1432.81,"SRD":0.134866,"TMM":5.71429e-05,"SZL":0.0709058,"MOP":0.123706,"BMD":1.0,"XPF":0.00946559,"ETB":0.034965,"JOD":1.41044,"MDL":0.0585025,"MRO":0.00278965,"YER":0.00400432,"BAM":0.577527,"AWG":0.558659,"PEN":0.297636,"VEF":0.100125,"SLL":0.000114285,"KYD":1.21807,"AOA":0.00318276,"TND":0.326606,"TJS":0.10595,"SCR":0.0709238,"LKR":0.00559756,"DJF":0.00561588,"GNF":0.000109532,"VUV":0.00877617,"SDG":0.0210481,"IMP":1.28932,"GEL":0.378501,"FJD":0.47142,"DOP":0.0197681,"XDR":1.38657,"MUR":0.0287992,"MMK":0.000654078,"LRD":0.00621898,"BBD":0.5,"ZMK":8.37711e-05,"XAU":1321.43,"VND":4.3094e-05,"UAH":0.0366026,"TMT":0.285714,"IQD":0.000840415,"BGN":0.577527,"KGS":0.0143347,"RWF":0.00113128,"BHD":2.65957,"UZS":0.000119048,"PKR":0.00718772,"MKD":0.0182994,"AFN":0.0134179,"NAD":0.0709058,"BDT":0.0119642,"AZN":0.588235,"SOS":0.00172413,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.12265,"ALL":0.00908265,"BND":0.734388,"KWD":3.28192,"GHS":0.188265,"ZMW":0.0837711,"XBT":3583.09,"NTD":0.0337206,"BYN":0.463034,"CNH":0.147738,"MRU":0.0278965,"STN":0.0461891,"VES":0.00030395},
    convert: function(amount, from, to) {
      return (amount * this.rates[from]) / this.rates[to];
    }
  };
