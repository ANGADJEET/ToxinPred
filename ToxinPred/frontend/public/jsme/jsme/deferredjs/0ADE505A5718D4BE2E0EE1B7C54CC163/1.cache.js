$wnd.jsme.runAsyncCallback1('var $7="Assignment of aromatic double bonds failed";function a8(a,b){var c;c=a.A[b];return 3<=c&&4>=c||11<=c&&13>=c||19<=c&&31>=c||37<=c&&51>=c||55<=c&&84>=c||87<=c&&103>=c}function $(a,b){var c,d;c=b;for(d=0;0!=b;)0==a.c&&(a.e=(a.a[++a.d]&63)<<11,a.c=6),d|=~~(65536&a.e)>>16-c+b,a.e<<=1,--b,--a.c;return d}function b8(a,b,c){a.c=6;a.d=c;a.a=b;a.e=(b[a.d]&63)<<11}function c8(a,b){var c,d;c=~~(b/2);(d=a>=c)&&(a-=c);c=~~(b/32)*a/(c-a);return d?-c:c}function d8(){this.b=!0}x(24,1,{},d8);_.a=null;_.b=!1;\n_.c=0;_.d=0;_.e=0;_.f=null;function e8(a,b){var c,d,e;1==a.b.E[b]&&mo(a.b,b,2);for(d=0;2>d;++d){c=D(a.b,d,b);wr(a.b,c,!1);for(e=0;e<a.b.f[c];++e)a.a[oo(a.b,c,e)]=!1}}function f8(a){var b,c,d,e,f,g,h;do{h=!1;for(c=0;c<a.b.d;++c)if(a.a[c]){f=!1;for(e=0;2>e;++e){b=!1;d=D(a.b,e,c);for(g=0;g<a.b.f[d];++g)if(c!=oo(a.b,d,g)&&a.a[oo(a.b,d,g)]){b=!0;break}if(!b){f=!0;break}}f&&(h=!0,e8(a,c))}}while(h)}function g8(){}x(29,1,{},g8);_.a=null;_.b=null;\nfunction h8(a,b,c,d){a.b||(4==a.i||3==a.i&&-1!=a.c?a.b=!0:(a.j[a.i]=d,a.f[a.i]=b,a.k[a.i]=c,++a.i))}\nfunction Baa(a,b){var c,d,e,f;if(a.b)return 3;-1!=a.c&&(a.c=b[a.c]);for(e=0;e<a.i;++e)2147483647!=a.f[e]&&(a.f[e]=b[a.f[e]]);if(-1==a.c&&0==a.d){d=2147483647;f=-1;for(e=0;e<a.i;++e)d>a.k[e]&&(d=a.k[e],f=e);a.c=a.f[f];for(e=f+1;e<a.i;++e)a.f[e-1]=a.f[e],a.k[e-1]=a.k[e],a.j[e-1]=a.j[e];--a.i}f=(-1==a.c?0:1)+a.d+a.i;if(4<f||3>f)return 3;c=-1==a.c&&1==a.d||-1!=a.c&&Rr(a.n.b,a.c);d=-1;for(e=0;e<a.i;++e)if(a.j[e]){if(-1!=d||c)return 3;d=e}f=!1;if(-1!=d)for(e=0;e<a.i;++e)!a.j[e]&&a.f[d]<a.f[e]&&(f=!f);d=\n!1;if(-1!=a.c&&!c)for(e=0;e<a.i;++e)a.c<a.f[e]&&(d=!d);e=a.f;c=a.k;var g,h,j;h=!1;for(g=1;g<a.i;++g)for(j=0;j<g;++j)e[j]>e[g]&&(h=!h),c[j]>c[g]&&(h=!h);return a.e^h^d^f?2:1}function i8(a,b,c,d,e,f){this.n=a;0!=d&&1!=d?this.b=!0:(this.a=b,this.c=c,this.d=d,this.e=f,this.i=0,this.j=C(lo,bn,-1,4,2),this.f=C(B,v,-1,4,1),this.k=C(B,v,-1,4,1),-1!=c&&1==d&&(h8(this,2147483647,e,!0),this.d=0))}x(30,1,{},i8);_.a=0;_.b=!1;_.c=0;_.d=0;_.e=!1;_.f=null;_.i=0;_.j=null;_.k=null;_.n=null;\nfunction j8(a){ko(a,15);if(a.b){var a=a.b,b;for(b=0;b<a.K.c;++b)if(0==(a.K.s[b]&67108864)&&3==a.V[b]){var c=a.K;c.s[b]|=67108864;c.N&=3}for(b=0;b<a.K.d;++b)3==a.k[b]&&2==so(a.K,b)&&mo(a.K,b,26)}}function k8(){this.e=1}x(33,1,{},k8);\nfunction l8(a){var b;if(null==a||0==a.length||0==qs(a).length)return lZ(new MO,m,!0);b=new Fs;var c=new g8,d=dW(qs(a)),e,f,g,h,j,l,n,q,r,t,w,u,y,F,H,s,R,ga,Y,ba,qa,Ha,Nb,ob,U,Ta,Ob,V,Da,ka,la,jb,S,Zc,Ia,mc,Ac;c.b=b;fr(c.b);Nb=null;h=C(B,v,-1,64,1);h[0]=-1;Ta=C(B,v,-1,64,1);Ob=C(B,v,-1,64,1);for(y=0;64>y;++y)Ta[y]=-1;f=U=0;V=ob=ka=!1;l=0;Da=d.length;for(j=1;32>=d[U];)++U;for(;U<Da;)if(la=d[U++]&65535,m8(la)||42==la){g=0;w=-1;F=Ha=H=!1;if(ka)82==la&&LN(d[U]&65535)?(ga=null!=String.fromCharCode(d[U+\n1]&65535).match(/\\d/)?2:1,g=Ir(gr(d,U-1,1+ga)),U+=ga):(s=String.fromCharCode(d[U]&65535).toLowerCase().charCodeAt(0)==(d[U]&65535)&&m8(d[U]&65535)?2:1,g=Ir(gr(d,U-1,s)),U+=s-1,w=0),64==d[U]&&(++U,64==d[U]&&(F=!0,++U),Ha=!0),72==d[U]&&(++U,w=1,LN(d[U]&65535)&&(w=d[U]-48,++U));else if(42==la)g=6,H=!0;else switch(String.fromCharCode(la).toUpperCase().charCodeAt(0)){case 66:U<Da&&114==d[U]?(g=35,++U):g=5;break;case 67:U<Da&&108==d[U]?(g=17,++U):g=6;break;case 70:g=9;break;case 73:g=53;break;case 78:g=\n7;break;case 79:g=8;break;case 80:g=15;break;case 83:g=16}if(0==g)throw new mp("SmilesParser: unknown element label found");e=ar(c.b,g);H?(V=!0,zr(c.b,e,1)):wr(c.b,e,String.fromCharCode(la).toLowerCase().charCodeAt(0)==la&&m8(la));if(-1!=w&&1!=g){n=C(Np,zn,-1,1,1);n[0]=~~(w<<24)>>24;var Ka=c.b,ab=e,La=n;null!=La&&0==La.length&&(La=null);null==La?null!=Ka.r&&(Ka.r[ab]=null):(null==Ka.r&&(Ka.r=C(Zq,o,3,Ka.J,0)),Ka.r[ab]=La)}u=h[l];-1!=h[l]&&128!=j&&er(c.b,e,h[l],j);j=1;h[l]=e;0!=f&&(xr(c.b,e,f),f=0);\n(ba=!Nb?null:gs(Nb,rR(u)))&&h8(ba,e,U,1==g);Ha&&(!Nb&&(Nb=new zs),As(Nb,rR(e),new i8(c,e,u,w,U,F)))}else if(46==la)j=128;else if(61==la)j=2;else if(35==la)j=4;else if(LN(la))if(Y=la-48,ka){for(;U<Da&&LN(d[U]&65535);)Y=10*Y+d[U]-48,++U;f=Y}else{ob&&U<Da&&LN(d[U]&65535)&&(Y=10*Y+d[U]-48,++U);ob=!1;if(64<=Y)throw new mp("SmilesParser: ringClosureAtom number out of range");if(-1==Ta[Y])Ta[Y]=h[l],Ob[Y]=U-1;else{if(Ta[Y]==h[l])throw new mp("SmilesParser: ring closure to same atom");Nb&&((ba=gs(Nb,rR(Ta[Y])))&&\nh8(ba,h[l],Ob[Y],!1),(ba=gs(Nb,rR(h[l])))&&h8(ba,Ta[Y],U-1,!1));er(c.b,h[l],Ta[Y],j);Ta[Y]=-1}j=1}else if(43==la){if(!ka)throw new mp("SmilesParser: \'+\' found outside brackets");for(q=1;43==d[U];)++q,++U;1==q&&LN(d[U]&65535)&&(q=d[U]-48,++U);qr(c.b,h[l],q)}else if(45==la){if(ka){for(q=-1;45==d[U];)--q,++U;-1==q&&LN(d[U]&65535)&&(q=48-d[U],++U);qr(c.b,h[l],q)}}else if(40==la){if(-1==h[l])throw new mp("Smiles with leading parenthesis are not supported");h[l+1]=h[l];++l}else if(41==la)--l;else if(91==\nla){if(ka)throw new mp("SmilesParser: nested square brackets found");ka=!0}else if(93==la){if(!ka)throw new mp("SmilesParser: closing bracket without opening one");ka=!1}else if(37==la)ob=!0;else if(58==la)if(ka){for(R=0;LN(d[U]&65535);)R=10*R+d[U]-48,++U;c.b.u[h[l]]=R}else j=64;else if(47==la)j=17;else if(92==la)j=9;else throw new mp("SmilesParser: unexpected character found: \'"+String.fromCharCode(la)+Pb);if(1!=j)throw new mp("SmilesParser: dangling open bond");for(y=0;64>y;++y)if(-1!=Ta[y])throw new mp("SmilesParser: dangling ring closure");\nvar hb=c.b,Ma,fa,kb,Fa,X,Lc;Lc=C(B,v,-1,hb.o,1);Fa=C(lo,bn,-1,hb.o,2);for(fa=0;fa<hb.p;++fa)for(kb=0;2>kb;++kb)Rr(hb,hb.B[kb][fa])&&!Rr(hb,hb.B[1-kb][fa])&&(Fa[hb.B[kb][fa]]=!0);for(X=hb.o-1;0<=X&&Fa[X];)Lc[X]=X,--X;for(Ma=0;Ma<=X;++Ma)if(Fa[Ma]){Lc[Ma]=X;Lc[X]=Ma;for(--X;0<=X&&Fa[X];)Lc[X]=X,--X}else Lc[Ma]=Ma;c.b.M=!0;ko(c.b,1);for(e=0;e<c.b.o;++e)if(null!=(null==b.r?null:null==b.r[e]?null:gr(b.r[e],0,b.r[e].length))&&!nr(c.b,e))if(t=(null==c.b.r?null:c.b.r[e])[0],c.b.A[e]<(ip(),Yq).length&&null!=\nYq[c.b.A[e]]){r=!1;jb=Up(c.b,e);jb-=Wp(c.b,e,jb);for(Zc=Yq[c.b.A[e]],Ia=0,mc=Zc.length;Ia<mc;++Ia)if(S=Zc[Ia],jb<=S){r=!0;S!=jb+t&&pr(c.b,e,jb+t);break}r||pr(c.b,e,jb+t)}var G,P,Eb,yb;for(G=0;G<c.b.c;++G)if(7==c.b.A[G]&&0==c.b.q[G]&&3<Up(c.b,G)&&0<c.b.k[G])for(yb=0;yb<c.b.f[G];++yb)if(P=po(c.b,G,yb),Eb=oo(c.b,G,yb),1<so(c.b,Eb)&&Kr(c.b.A[P])){4==c.b.E[Eb]?mo(c.b,Eb,2):mo(c.b,Eb,1);qr(c.b,G,c.b.q[G]+1);qr(c.b,P,c.b.q[P]-1);break}var jd,Ed,ta,Bc,Vb,na,db,Wb,W,bb,$d,Mc,Oa,pb,Ua,Fb;ko(c.b,1);c.a=C(lo,\nbn,-1,c.b.d,2);for(ta=0;ta<c.b.d;++ta)64==c.b.E[ta]&&(mo(c.b,ta,1),c.a[ta]=!0);Fb=new no(c.b,3);Wb=C(lo,bn,-1,Fb.i.c,2);for(Oa=0;Oa<Fb.i.c;++Oa){pb=vo(Fb.i,Oa);Wb[Oa]=!0;for(db=0;db<pb.length;++db)if(!nr(c.b,pb[db])){Wb[Oa]=!1;break}if(Wb[Oa]){Ua=vo(Fb.j,Oa);for(db=0;db<Ua.length;++db)c.a[Ua[db]]=!0}}for(ta=0;ta<c.b.d;++ta)if(!c.a[ta]&&0!=Fb.b[ta]&&nr(c.b,D(c.b,0,ta))&&nr(c.b,D(c.b,1,ta)))a:{var $c=c,hc=ta,ic=void 0,K=void 0,Xb=void 0,qb=void 0,dd=void 0,ib=void 0,cc=void 0,rb=void 0,Nc=void 0,kd=\nvoid 0,qd=void 0,ua=void 0,Yb=void 0,rb=C(B,v,-1,$c.b.c,1),ib=C(B,v,-1,$c.b.c,1),cc=C(B,v,-1,$c.b.c,1),Nc=C(B,v,-1,$c.b.c,1),ic=D($c.b,0,hc),K=D($c.b,1,hc);ib[0]=ic;ib[1]=K;cc[0]=-1;cc[1]=hc;rb[ic]=1;rb[K]=2;Nc[ic]=-1;Nc[K]=ic;for(kd=dd=1;dd<=kd&&15>rb[ib[dd]];){Yb=ib[dd];for(qd=0;qd<$c.b.f[Yb];++qd)if(Xb=po($c.b,Yb,qd),Xb!=Nc[Yb]){qb=oo($c.b,Yb,qd);if(Xb==ic){cc[0]=qb;for(ua=0;ua<=kd;++ua)$c.a[cc[qd]]=!0;break a}nr($c.b,Xb)&&0==rb[Xb]&&(++kd,ib[kd]=Xb,cc[kd]=qb,rb[Xb]=rb[Yb]+1,Nc[Xb]=Yb)}++dd}}ko(c.b,\n3);for(Oa=0;Oa<Fb.i.c;++Oa)if(Wb[Oa]){pb=vo(Fb.i,Oa);for(db=0;db<pb.length;++db){var ed;var ub=c,za=pb[db],ad=void 0;16==ub.b.A[za]&&0>=ub.b.q[za]||6==ub.b.A[za]&&0!=ub.b.q[za]||!nr(ub.b,za)?ed=!1:(ad=null==bq(ub.b,za)?0:(null==ub.b.r?null:ub.b.r[za])[0],ed=1>lr(ub.b,za)-Up(ub.b,za)-ad||5!=ub.b.A[za]&&6!=ub.b.A[za]&&7!=ub.b.A[za]&&8!=ub.b.A[za]&&15!=ub.b.A[za]&&16!=ub.b.A[za]&&33!=ub.b.A[za]&&34!=ub.b.A[za]?!1:!0);if(!ed){wr(c.b,pb[db],!1);for(bb=0;bb<c.b.f[pb[db]];++bb)c.a[oo(c.b,pb[db],bb)]=!1}}}f8(c);\nfor(Oa=0;Oa<Fb.i.c;++Oa)if(Wb[Oa]&&6==vo(Fb.j,Oa).length){Ua=vo(Fb.j,Oa);W=!0;for(Bc=0,Vb=Ua.length;Bc<Vb;++Bc)if(ta=Ua[Bc],!c.a[ta]){W=!1;break}W&&(e8(c,Ua[0]),e8(c,Ua[2]),e8(c,Ua[4]),f8(c))}for(Mc=5;4<=Mc;--Mc){do{$d=!1;for(ta=0;ta<c.b.d;++ta)if(c.a[ta]){for(db=jd=0;2>db;++db){na=D(c.b,db,ta);for(bb=0;bb<c.b.f[na];++bb)c.a[oo(c.b,na,bb)]&&++jd}if(jd==Mc){e8(c,ta);f8(c);$d=!0;break}}}while($d)}for(ta=0;ta<c.b.d;++ta)if(c.a[ta])throw new mp($7);for(Ed=0;Ed<c.b.c;++Ed)if(nr(c.b,Ed))throw new mp($7);\nc.b.r=null;c.b.M=!1;var xb,sc,Gc,vb,Fd,Vd,vd,jc,Cc,Jc,Oc;ko(c.b,3);Cc=!1;Jc=C(B,v,-1,2,1);Oc=C(B,v,-1,2,1);jc=C(B,v,-1,2,1);for(sc=0;sc<c.b.d;++sc)if(!Yo(c.b,sc)&&2==c.b.E[sc]){for(vb=0;2>vb;++vb){Jc[vb]=-1;jc[vb]=-1;xb=D(c.b,vb,sc);for(vd=0;vd<c.b.f[xb];++vd)Gc=oo(c.b,xb,vd),Gc!=sc&&(17==c.b.E[Gc]||9==c.b.E[Gc]?(Jc[vb]=po(c.b,xb,vd),Oc[vb]=Gc):jc[vb]=po(c.b,xb,vd));if(-1==Jc[vb])break}if(-1!=Jc[0]&&-1!=Jc[1]){Vd=c.b.E[Oc[0]]!=c.b.E[Oc[1]];Fd=!1;for(vb=0;2>vb;++vb)-1!=jc[vb]&&jc[vb]<Jc[vb]&&(Fd=!Fd);\nEr(c.b,sc,Vd^Fd?2:1,!1);Cc=!0}}for(sc=0;sc<c.b.d;++sc)(17==c.b.E[sc]||9==c.b.E[sc])&&mo(c.b,sc,1);Cc&&(c.b.N|=4);$s(new k8,c.b);if(Nb){for(qa=n8((Ac=new fX(Nb),new o8(Nb,Ac)));zW(qa.a.a);)ba=(qa.a.b=uq(qa.a.a)).Aj(),yr(c.b,ba.a,Baa(ba,Lc),!1);c.b.N|=4}Sr(c.b);j8(c.b);V&&Gr(c.b,!0);return(new as(b)).a.a.a}function m8(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}function n8(a){a=new iX(a.b.a);return new p8(a)}function o8(a,b){this.a=a;this.b=b}x(684,672,{},o8);\n_.xj=function(a){a:{var b,c;for(c=new iX((new fX(this.a)).a);zW(c.a);)if(b=c.b=uq(c.a),b=b.Aj(),null==a?null==b:Kw(a,b)){a=!0;break a}a=!1}return a};_.Ff=function(){return n8(this)};_.gh=function(){return this.b.a.c};_.a=null;_.b=null;function p8(a){this.a=a}x(685,1,{},p8);_.af=function(){return zW(this.a.a)};_.bf=function(){return(this.a.b=uq(this.a.a)).Aj()};_.cf=function(){hX(this.a)};_.a=null;function q8(){NW();this.a=6122;this.b=12230397}x(701,1,{},q8);x(754,644,Cn);\n_.me=function(){var a,b,c,d,e;a=b=d=null;if(this.b.a==(BR(),CR)&&this.b.i==(DR(),ER))try{var f=this.b.b,g,h,j;j=null;h=new Fs;ls(new Cs,h,new BM(new FM(f)))&&(g=new as(h),j=g.a.a.a);b=j;if(null==b)throw new mp("V3000 read failed.");a=dl;this.a.Mc.a="V3000 conversion provided by OpenChemLib"}catch(l){if(l=$o(l),E(l,103))c=l,d=c.ke();else throw l;}else if(this.b.a==aY)try{var n=this.b.b,q,r,t,w,u,y,F;b=-1!=n.indexOf(ge)?(q=bW(n,ge),r=3<=q.length&&0<q[2].length,t=2<=q.length&&0<q[1].length,w=l8(q[0]),\nu=r?l8(q[2]):l8(m),y=t?l8(q[1]):l8(m),F=m,F+=Ab,F+=uS(1,3)+uS(1,3),t&&(F+=uS(1,3)),F+=ca,F+=wb+w,F+=wb+u,t&&(F+=wb+y),F):l8(n);this.b.f==(yR(),HR)?a="readSMIRKS":this.b.f==YX&&(a="readSMILES");this.a.Mc.a="SMILES conversion provided by OpenChemLib"}catch(H){if(H=$o(H),E(H,103))c=H,d="SMILES parsing error:"+c.ke();else throw H;}else if(d="Invalid or unsupported input",this.a.cd&&!this.b.d)try{var s=new d8,R=qs(this.b.b),ga;if(null==R||0==R.length)ga=null;else{var Y=dW(R),ba,qa,Ha,Nb,ob;if(null==Y)ga=\nnull;else{b8(s,Y,0);ba=$(s,4);Nb=$(s,4);8<ba&&(ba=Nb);qa=$(s,ba);Ha=$(s,Nb);ob=new ts(qa,Ha);var U=null,Ta,Ob,V,Da,ka,la,jb,S,Zc,Ia,mc,Ac,Ka,ab,La,hb,Ma,fa,kb,Fa,X,Lc,G,P,Eb,yb,jd,Ed,ta,Bc,Vb,na,db,Wb,W,bb,$d,Mc,Oa,pb,Ua,Fb,$c,hc,ic,K,Xb,qb,dd,ib,cc,rb,Nc,kd,qd,ua,Yb,ed,ub,za,ad,xb,sc,Gc,vb,Fd,Vd,vd,jc,Cc,Jc,Oc;Fd=8;s.f=ob;fr(s.f);if(!(null==Y||0==Y.length))if(null!=U&&0==U.length&&(U=null),b8(s,Y,0),V=$(s,4),hb=$(s,4),8<V&&(Fd=V,V=hb),0==V)Gr(s.f,1==$(s,1));else{Da=$(s,V);ka=$(s,hb);qd=$(s,V);ub=\n$(s,V);ed=$(s,V);Eb=$(s,V);for(S=0;S<Da;++S)ar(s.f,6);for(K=0;K<qd;++K)dr(s.f,$(s,V),7);for(K=0;K<ub;++K)dr(s.f,$(s,V),8);for(K=0;K<ed;++K)dr(s.f,$(s,V),$(s,8));for(K=0;K<Eb;++K)qr(s.f,$(s,V),$(s,4)-8);yb=1+ka-Da;db=$(s,4);La=0;Ar(s.f,0,0);Br(s.f,0,0);Cr(s.f,0,0);Wb=null!=U&&39<=U[0];Oc=Cc=vd=vb=0;Bc=ta=!1;Wb&&(U.length>2*Da-2&&39==U[2*Da-2]||U.length>3*Da-3&&39==U[3*Da-3]?(Bc=!0,Xb=(ta=U.length==3*Da-3+9)?3*Da-3:2*Da-2,ab=86*(U[Xb+1]-40)+U[Xb+2]-40,vb=Math.pow(10,ab/2E3-1),Xb+=2,Vd=86*(U[Xb+1]-40)+\nU[Xb+2]-40,vd=Math.pow(10,Vd/1500-1),Xb+=2,jc=86*(U[Xb+1]-40)+U[Xb+2]-40,Cc=Math.pow(10,jc/1500-1),ta&&(Xb+=2,Jc=86*(U[Xb+1]-40)+U[Xb+2]-40,Oc=Math.pow(10,Jc/1500-1))):ta=U.length==3*Da-3);s.b&&ta&&(U=null,Wb=!1);for(K=1;K<Da;++K)W=$(s,db),0==W?(Wb&&(Ar(s.f,K,s.f.G[0].a+8*(U[2*K-2]-83)),Br(s.f,K,s.f.G[0].b+8*(U[2*K-1]-83)),ta&&Cr(s.f,K,s.f.G[0].c+8*(U[2*Da-3+K]-83))),++yb):(La+=W-1,Wb&&(Ar(s.f,K,Ho(s.f,La)+U[2*K-2]-83),Br(s.f,K,Io(s.f,La)+U[2*K-1]-83),ta&&Cr(s.f,K,Jo(s.f,La)+(U[2*Da-3+K]-83))),er(s.f,\nLa,K,1));for(K=0;K<yb;++K)er(s.f,$(s,V),$(s,V),1);dd=C(lo,bn,-1,ka,2);for(fa=0;fa<ka;++fa)switch(X=$(s,2),X){case 0:a8(s.f,D(s.f,0,fa))||a8(s.f,D(s.f,1,fa))?mo(s.f,fa,32):dd[fa]=!0;break;case 2:mo(s.f,fa,2);break;case 3:mo(s.f,fa,4)}Ob=$(s,V);for(K=0;K<Ob;++K)if(S=$(s,V),8==Fd)za=$(s,2),3==za?(sr(s.f,S,1,0),yr(s.f,S,1,!1)):yr(s.f,S,za,!1);else switch(za=$(s,3),za){case 4:yr(s.f,S,1,!1);sr(s.f,S,1,$(s,3));break;case 5:yr(s.f,S,2,!1);sr(s.f,S,1,$(s,3));break;case 6:yr(s.f,S,1,!1);sr(s.f,S,2,$(s,3));\nbreak;case 7:yr(s.f,S,2,!1);sr(s.f,S,2,$(s,3));break;default:yr(s.f,S,za,!1)}8==Fd&&0==$(s,1)&&(s.f.I=!0);Ta=$(s,hb);for(K=0;K<Ta;++K)if(fa=$(s,hb),1==s.f.E[fa])switch(za=$(s,3),za){case 4:Er(s.f,fa,1,!1);Dr(s.f,fa,1,$(s,3));break;case 5:Er(s.f,fa,2,!1);Dr(s.f,fa,1,$(s,3));break;case 6:Er(s.f,fa,1,!1);Dr(s.f,fa,2,$(s,3));break;case 7:Er(s.f,fa,2,!1);Dr(s.f,fa,2,$(s,3));break;default:Er(s.f,fa,za,!1)}else Er(s.f,fa,$(s,2),!1);Gr(s.f,1==$(s,1));jb=null;for(Yb=0;1==$(s,1);)switch(na=Yb+$(s,4),na){case 0:ua=\n$(s,V);for(K=0;K<ua;++K)S=$(s,V),zr(s.f,S,2048);break;case 1:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),Nc=$(s,8),xr(s.f,S,Nc);break;case 2:ua=$(s,hb);for(K=0;K<ua;++K)fa=$(s,hb),mo(s.f,fa,64);break;case 3:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),zr(s.f,S,4096);break;case 4:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),Gc=$(s,4)<<3,zr(s.f,S,Gc);break;case 5:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),la=$(s,2)<<1,zr(s.f,S,la);break;case 6:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),zr(s.f,S,1);break;case 7:ua=$(s,V);for(K=0;K<ua;++K)S=\n$(s,V),hc=$(s,4)<<7,zr(s.f,S,hc);break;case 8:ua=$(s,V);for(K=0;K<ua;++K){S=$(s,V);mc=$(s,4);Zc=C(B,v,-1,mc,1);for(ib=0;ib<mc;++ib)Ia=$(s,8),Zc[ib]=Ia;var Gd=s.f,wf=S,Uc=Zc;null==Gd.t&&(Gd.t=C(Oo,tn,93,Gd.J,0));null!=Uc&&wp(Uc);Gd.t[wf]=Uc;Gd.N=0;Gd.H=!0}break;case 9:ua=$(s,hb);for(K=0;K<ua;++K)fa=$(s,hb),Gc=$(s,2)<<4,Fr(s.f,fa,Gc);break;case 10:ua=$(s,hb);for(K=0;K<ua;++K)fa=$(s,hb),Lc=$(s,4),Fr(s.f,fa,Lc);break;case 11:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),zr(s.f,S,8192);break;case 12:ua=$(s,hb);\nfor(K=0;K<ua;++K)fa=$(s,hb),G=$(s,8)<<6,Fr(s.f,fa,G);break;case 13:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),ad=$(s,3)<<14,zr(s.f,S,ad);break;case 14:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),kd=$(s,5)<<17,zr(s.f,S,kd);break;case 15:Yb=16;break;case 16:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),sc=$(s,3)<<22,zr(s.f,S,sc);break;case 17:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),pr(s.f,S,$(s,4));break;case 18:ua=$(s,V);rb=$(s,4);for(K=0;K<ua;++K){S=$(s,V);Vb=$(s,rb);cc=C(Np,zn,-1,Vb,1);for(ib=0;ib<Vb;++ib)cc[ib]=~~($(s,7)<<\n24)>>24;var nc=s.f,Nd=S,ec=gr(cc,0,cc.length),Gb=void 0;if(null!=ec)if(0==ec.length)ec=null;else if(Gb=Ir(ec),0!=Gb&&rs(ec,Vq[Gb])||rs(ec,he))dr(nc,Nd,Gb),ec=null;null==ec?null!=nc.r&&(nc.r[Nd]=null):(null==nc.r&&(nc.r=C(Zq,o,3,nc.J,0)),nc.r[Nd]=dW(ec))}break;case 19:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),P=$(s,3)<<25,zr(s.f,S,P);break;case 20:ua=$(s,hb);for(K=0;K<ua;++K)fa=$(s,hb),sc=$(s,3)<<14,Fr(s.f,fa,sc);break;case 21:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),ur(s.f,S,$(s,2)<<4);break;case 22:ua=$(s,\nV);for(K=0;K<ua;++K)S=$(s,V),zr(s.f,S,268435456);break;case 23:ua=$(s,hb);for(K=0;K<ua;++K)fa=$(s,hb),Fr(s.f,fa,131072);break;case 24:ua=$(s,hb);for(K=0;K<ua;++K)fa=$(s,hb),la=$(s,2)<<18,Fr(s.f,fa,la);break;case 25:for(K=0;K<Da;++K)if(1==$(s,1)){var ld=s.f;ld.s[K]|=512}break;case 26:ua=$(s,hb);jb=C(B,v,-1,ua,1);for(K=0;K<ua;++K)jb[K]=$(s,hb);break;case 27:ua=$(s,V);for(K=0;K<ua;++K)S=$(s,V),zr(s.f,S,536870912)}jo(new wo(s.f),dd);if(null!=jb)for(kb=0,Fa=jb.length;kb<Fa;++kb)fa=jb[kb],mo(s.f,fa,2==\ns.f.E[fa]?4:2);jd=0;if(null==U&&Y.length>s.d+1&&(32==Y[s.d+1]||9==Y[s.d+1]))U=Y,jd=s.d+2;if(null!=U)try{if(33==U[jd]||35==U[jd]){b8(s,U,jd+1);ta=1==$(s,1);Bc=1==$(s,1);xb=2*$(s,4);Ma=1<<xb;fa=0;for(S=1;S<Da;++S)fa<ka&&D(s.f,1,fa)==S?(Fb=D(s.f,0,fa++),Ua=1):(Fb=0,Ua=8),Ar(s.f,S,Ho(s.f,Fb)+Ua*($(s,xb)-~~(Ma/2))),Br(s.f,S,Io(s.f,Fb)+Ua*($(s,xb)-~~(Ma/2))),ta&&Cr(s.f,S,Jo(s.f,Fb)+Ua*($(s,xb)-~~(Ma/2)));Ka=ta?1.5:(ip(),24);Ac=hr(s.f,Da,ka,Ka);if(35==U[jd]){ic=0;$c=C(B,v,-1,Da,1);for(S=0;S<Da;++S)ic+=$c[S]=\nvp(s.f,S);for(S=0;S<Da;++S)for(K=0;K<$c[S];++K)hc=ar(s.f,1),er(s.f,S,hc,1),Ar(s.f,hc,Ho(s.f,S)+($(s,xb)-~~(Ma/2))),Br(s.f,hc,Io(s.f,S)+($(s,xb)-~~(Ma/2))),ta&&Cr(s.f,hc,Jo(s.f,S)+($(s,xb)-~~(Ma/2)));Da+=ic}if(Bc){var ae=$(s,xb),oc=Math.log(2E3)*Math.LOG10E*ae/(Ma-1)-1;vb=Math.pow(10,oc);vd=vb*c8($(s,xb),Ma);Cc=vb*c8($(s,xb),Ma);ta&&(Oc=vb*c8($(s,xb),Ma));Ua=vb/Ac;for(S=0;S<Da;++S)Ar(s.f,S,vd+Ua*Ho(s.f,S)),Br(s.f,S,Cc+Ua*Io(s.f,S)),ta&&Cr(s.f,S,Oc+Ua*Jo(s.f,S))}else{Ua=1.5/Ac;for(S=0;S<Da;++S)Ar(s.f,\nS,Ua*Ho(s.f,S)),Br(s.f,S,Ua*Io(s.f,S)),ta&&Cr(s.f,S,Ua*Jo(s.f,S))}}else if(ta&&!Bc&&0==vb&&(vb=1.5),0!=vb&&0!=s.f.p){for(fa=Ac=0;fa<s.f.p;++fa)bb=Ho(s.f,D(s.f,0,fa))-Ho(s.f,D(s.f,1,fa)),$d=Io(s.f,D(s.f,0,fa))-Io(s.f,D(s.f,1,fa)),Mc=ta?Jo(s.f,D(s.f,0,fa))-Jo(s.f,D(s.f,1,fa)):0,Ac+=Math.sqrt(bb*bb+$d*$d+Mc*Mc);Ac/=s.f.p;pb=vb/Ac;for(S=0;S<s.f.o;++S)Ar(s.f,S,Ho(s.f,S)*pb+vd),Br(s.f,S,Io(s.f,S)*pb+Cc),ta&&Cr(s.f,S,Jo(s.f,S)*pb+Oc)}}catch(dc){if(dc=$o(dc),E(dc,103))Oa=dc,Oa.ke(),U=null,ta=!1;else throw dc;\n}if((Ed=null!=U&&!ta)||s.b){ko(s.f,3);for(fa=0;fa<s.f.d;++fa)if(2==so(s.f,fa)&&!Yo(s.f,fa)&&0==(s.f.C[fa]&3)){var eb=s.f;eb.C[fa]|=16777216}}!Ed&&s.b&&(s.f.N|=4,qb=new k8,qb.i=new q8,$s(qb,s.f),Ed=!0);Ed?(Sr(s.f),j8(s.f)):ta||(s.f.N|=4)}ga=ob}}b=(new as(ga)).a.a.a;a="readOCLCode";d=null}catch(Ke){if(Ke=$o(Ke),!E(Ke,103))throw Ke;}e=!1;if(null!=b&&null==d)try{(e=FR(this.a,b,!1))&&this.c&&sP(this.a,a,0,0,0,!0)}catch(Ze){if(Ze=$o(Ze),E(Ze,103))d="Invalid converted molfile";else throw Ze;}this.a.jc=e;\nthis.e?e?NR(this.e):OR(this.e,new mp(d)):null!=d&&C4(this.a,d);this.d&&iK(this.a)};Z(684);Z(685);Z(24);Z(29);Z(30);M(c1)(1);\n//# sourceURL=1.js\n')