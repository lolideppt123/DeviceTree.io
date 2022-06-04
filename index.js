


    let vdArr = [], hdArr = [], ssdArr = [];
    let called_status = false;

    let vdCount = 0, hdCount = 0, ssdCount = 0;

    //Button Selector
    const vdNext = $elem('vdNext');
    const vdPrev = $elem('vdPrev');
    const vdNew = $elem('vdNew');
    const vdUpdate = $elem('vdUpdate');

    const hdNext = $elem('hdNext');
    const hdPrev = $elem('hdPrev');
    const hdNew = $elem('hdNew');
    const hdUpdate = $elem('hdUpdate');

    const ssdNext = $elem('ssdNext');
    const ssdPrev = $elem('ssdPrev');
    const ssdNew = $elem('ssdNew');
    const ssdUpdate = $elem('ssdUpdate');

    const enableChk = $elem('enableChk');


    //Event Listener
    vdNext.addEventListener('click',vdNextFunc);
    vdPrev.addEventListener('click',vdPrevFunc);
    vdNew.addEventListener('click',vdNewFunc);
    vdUpdate.addEventListener('click',vdUpdateFunc);

    hdNext.addEventListener('click', hdNextFunc);
    hdPrev.addEventListener('click', hdPrevFunc);
    hdNew.addEventListener('click', hdNewFunc);
    hdUpdate.addEventListener('click', hdUpdateFunc);

    ssdNext.addEventListener('click', ssdNextFunc);
    ssdPrev.addEventListener('click', ssdPrevFunc);
    ssdNew.addEventListener('click', ssdNewFunc);
    ssdUpdate.addEventListener('click', ssdUpdateFunc);

    enableChk.addEventListener('click', ()=> {
        if(enableChk.checked === true) {
            vdArr[0].disable();
        }
        else {
            vdArr[0].enable();
        }
    })

    class Device {
        constructor(rc, suppName, serialNum) {
            this._rc = rc;
            this._suppName = suppName;
            this._serialNum = serialNum;
        }
        disable() {
            $elem("vdRepCost").setAttribute('disabled','');
            $elem("vdSuppName").setAttribute('disabled','');
            $elem("vdSNum").setAttribute('disabled','');
            $elem("reso1").setAttribute('disabled','');
            $elem("reso2").setAttribute('disabled','');
            $elem("vdType").setAttribute('disabled','');

            $elem("hdRepCost").setAttribute('disabled','');
            $elem("hdSuppName").setAttribute('disabled','');
            $elem("hdSNum").setAttribute('disabled','');
            $elem("hdSize").setAttribute('disabled','');
            $elem("hdTRate").setAttribute('disabled','');
            $elem("hdPSize").setAttribute('disabled','');
            $elem("hdNumPlat").setAttribute('disabled','');

            $elem("ssdRepCost").setAttribute('disabled','');
            $elem("ssdSuppName").setAttribute('disabled','');
            $elem("ssdSNum").setAttribute('disabled','');
            $elem("ssdSize").setAttribute('disabled','');
            $elem("ssdTRate").setAttribute('disabled','');
            $elem("ssdType").setAttribute('disabled','');
            $elem("ssdWearlvl").setAttribute('disabled','');

        }
        enable() {
            $elem("vdRepCost").removeAttribute('disabled','');
            $elem("vdSuppName").removeAttribute('disabled','');
            $elem("vdSNum").removeAttribute('disabled','');
            $elem("reso1").removeAttribute('disabled','');
            $elem("reso2").removeAttribute('disabled','');
            $elem("vdType").removeAttribute('disabled','');

            $elem("hdRepCost").removeAttribute('disabled','');
            $elem("hdSuppName").removeAttribute('disabled','');
            $elem("hdSNum").removeAttribute('disabled','');
            $elem("hdSize").removeAttribute('disabled','');
            $elem("hdTRate").removeAttribute('disabled','');
            $elem("hdPSize").removeAttribute('disabled','');
            $elem("hdNumPlat").removeAttribute('disabled','');

            $elem("ssdRepCost").removeAttribute('disabled','');
            $elem("ssdSuppName").removeAttribute('disabled','');
            $elem("ssdSNum").removeAttribute('disabled','');
            $elem("ssdSize").removeAttribute('disabled','');
            $elem("ssdTRate").removeAttribute('disabled','');
            $elem("ssdType").removeAttribute('disabled','');
            $elem("ssdWearlvl").removeAttribute('disabled','');
        }
        //Getters
        get rc () {
            return this._rc;
        }
        get suppName () {
            return this._suppName;
        }
        get serialNum () {
            return this._serialNum;
        }
        //Setters
        set rc (rc) {
            return this._rc = rc;
        }
        set suppName (suppName) {
            return this._suppName = suppName;
        }
        set serialNum (serialNum) {
            return this._serialNum = serialNum;
        }
    }

    class VideoDevice extends Device {
        constructor(rc, suppName, serialNum, reso1, reso2, type) {
            super(rc, suppName, serialNum);
            this._reso1 = reso1;
            this._reso2 = reso2;
            this._type = type;
        }
        disable() {
            return super.disable();
        }
        enable() {
            return super.enable();
        }
        //Getters
        get rc() {
            return super.rc; 
        }
        get suppName () {
            return super.suppName;
        }
        get serialNum () {
            return super.serialNum;
        }
        get reso1() {
            return this._reso1; 
        }
        get reso2() {
            return this._reso2; 
        }
        get type() {
            return this._type; 
        }
        //Setters
        set rc(rc) {
            return super.rc = rc; 
        }
        set suppName (suppName) {
            return super.suppName = suppName;
        }
        set serialNum (serialNum) {
            return super.serialNum = serialNum;
        }
        set reso1(reso1) {
            return this._reso1 = reso1; 
        }
        set reso2(reso2) {
            return this._reso2 = reso2; 
        }
        set type(type) {
            return this._type = type; 
        }
    }

    class DiskDevice extends Device {
        constructor(rc, suppName, serialNum, size, trans) {
            super(rc, suppName, serialNum);
            this._size = size;
            this._trans = trans;
        }
        get rc () {
            return super.rc;
        }
        get suppName () {
            return super.suppName;
        }
        get serialNum () {
            return super.serialNum;
        }
        get size () {
            return this._size;
        }
        get trans () {
            return this._trans;
        }
    }

    class HardDisk extends DiskDevice {
        constructor(rc, suppName, serialNum, size, trans, plat, noPlat) {
            super(rc, suppName, serialNum, size, trans)
            this._plat = plat;
            this._noPlat = noPlat;
        }
        get rc () {
            return super.rc;
        }
        get suppName () {
            return super.suppName;
        }
        get serialNum () {
            return super.serialNum;
        }
        get size () {
            return super.size;
        }
        get trans () {
            return super.trans;
        }
        get plat () {
            return this._plat;
        }
        get noPlat() {
            return this._noPlat;
        }
    }

    class SSD extends DiskDevice {
        constructor(rc, suppName, serialNum, size, trans, type, wear) {
            super(rc, suppName, serialNum, size, trans);
            this._type = type;
            this._wear = wear;
        }
        get rc () {
            return super.rc;
        }
        get suppName () {
            return super.suppName;
        }
        get serialNum () {
            return super.serialNum;
        }
        get size () {
            return super.size;
        }
        get trans () {
            return super.trans;
        }
        get type () {
            return this._type;
        }
        get wear () {
            return this._wear
        } 
    }

    //Default Values Video Device
    vdArr.push(new VideoDevice('$ 1000', 'Bestbuy', 'PIX-E5', '1920', '1080', 'LED'));
    vdArr.push(new VideoDevice('$ 500', 'Amazon', 'KS-200e', '1366', '1080', 'LCD'));
    vdArr.push(new VideoDevice('$ 600', 'Bestbuy', 'AUG-5.52m', '1920', '1080', 'LED'));

    hdArr.push(new HardDisk('$ 1000', 'Bestbuy', 'PIX-E5','2TB', '4GB/s', '3.74 inch', 4));
    hdArr.push(new HardDisk('$ 500', 'Amazon', 'KS-200e','1TB', '2GB/s', '3.5 inch', 2));
    hdArr.push(new HardDisk('$ 600', 'Bestbuy', 'AUG-5.52m','1TB', '3GB/s', '3.5 inch', 3));

    ssdArr.push(new SSD('$ 1000', 'Bestbuy', 'PIX-E5','2TB', '4GB/s', 'DRAM', true));
    ssdArr.push(new SSD('$ 500', 'Amazon', 'KS-200e','1TB', '2GB/s', 'DRAM', true));
    ssdArr.push(new SSD('$ 600', 'Bestbuy', 'AUG-5.52m','1TB', '3GB/s', 'Flash', false));

    //Functions
    function vdNextFunc() {
        vdCount = (vdCount >= vdArr.length-1)?vdCount:(vdCount+1);
        loadVD();
    }

    function vdPrevFunc() {
        vdCount = (vdCount <= 0)?vdCount:(vdCount-1);
        loadVD();
    }

    function vdNewFunc() {
        vdArr.unshift(new VideoDevice('', '', '', '', '', 'LCD'));
        vdCount = 0;
        loadVD();
    }

    function vdUpdateFunc() {
        vdArr[vdCount] = new VideoDevice($elem("vdRepCost").value, $elem("vdSuppName").value, $elem("vdSNum").value, $elem("reso1").value, $elem("reso2").value, $elem("vdType").value);
    }

    function loadVD() {
        $elem("vdRepCost").value = vdArr[vdCount].rc;
        $elem("vdSuppName").value = vdArr[vdCount].suppName;
        $elem("vdSNum").value = vdArr[vdCount].serialNum;
        $elem("reso1").value = vdArr[vdCount].reso1;
        $elem("reso2").value = vdArr[vdCount].reso2;
        $elem("vdType").value = vdArr[vdCount].type;
        loadHD();
        loadSSD();
    }

    function hdNextFunc() {
        hdCount = (hdCount >= hdArr.length-1)?hdCount:(hdCount+1);
        loadHD();
    }

    function hdPrevFunc() {
        hdCount = (hdCount <= 0)?hdCount:(hdCount-1);
        loadHD();
    }

    function hdUpdateFunc() {
        hdArr[hdCount] = new HardDisk($elem("hdRepCost").value, $elem("hdSuppName").value, $elem("hdSNum").value, 
        $elem("hdSize").value, $elem("hdTRate").value, $elem("hdPSize").value, $elem("hdNumPlat").value);
    }

    function hdNewFunc() {
        hdArr.unshift(new HardDisk('', '', '', '', '', '', ''));
        hdCount = 0;
        loadHD();
    }

    function loadHD() {
        $elem("hdRepCost").value = hdArr[hdCount].rc;
        $elem("hdSuppName").value = hdArr[hdCount].suppName;
        $elem("hdSNum").value = hdArr[hdCount].serialNum;
        $elem("hdSize").value = hdArr[hdCount].size;
        $elem("hdTRate").value = hdArr[hdCount].trans;
        $elem("hdPSize").value = hdArr[hdCount].plat;
        $elem("hdNumPlat").value = hdArr[hdCount].noPlat;
    }
    
    function ssdNextFunc() {
        ssdCount = (ssdCount >= ssdArr.length-1)?ssdCount:(ssdCount+1);
        loadSSD();
    }

    function ssdPrevFunc() {
        ssdCount = (ssdCount <= 0)?ssdCount:(ssdCount-1);
        loadSSD();
    }

    function ssdUpdateFunc() {
        ssdArr[ssdCount] = new SSD($elem("ssdRepCost").value, $elem("ssdSuppName").value, $elem("ssdSNum").value, 
        $elem("ssdSize").value, $elem("ssdTRate").value, $elem("ssdType").value, $elem("ssdWearlvl").checked);
    }
    
    function ssdNewFunc() {
        ssdArr.unshift(new SSD('', '', '', '', '', 'Flash', false));
        ssdCount = 0;
        loadSSD();
    }
    
    function loadSSD() {
        $elem("ssdRepCost").value = ssdArr[ssdCount].rc;
        $elem("ssdSuppName").value = ssdArr[ssdCount].suppName;
        $elem("ssdSNum").value = ssdArr[ssdCount].serialNum;
        $elem("ssdSize").value = ssdArr[ssdCount].size;
        $elem("ssdTRate").value = ssdArr[ssdCount].trans;
        $elem("ssdType").value = ssdArr[ssdCount].type;
        $elem("ssdWearlvl").checked = ssdArr[ssdCount].wear;
    }

    function $elem(id) {
        return document.getElementById(id);
    }
