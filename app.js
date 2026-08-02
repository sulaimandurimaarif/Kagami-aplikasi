// ====== INITIAL DATA ======
const DEFAULT_TITLES = [
  { id: "m-1", title: "Solo Leveling", type: "Manhwa", rating: 4.9, chapters: 179, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/solo%20leveling%202.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      1: [
         "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510324/cagp2ynioo7tbsa12ch6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510325/yasxhzuhmmoek4dann01.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510326/lpuv9616snurubqnimlo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510327/iiojtvacowo82g3rd3ku.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510327/rhh7pwclbtnayschuvwp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510328/qcnls3fezhjclzsvjukf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510339/kkclo0zfkn7sddz0mky7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510340/tmd1d8kmnw2kjklyhs4m.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510343/tzhrgb2qo2dmqdnmvfy2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510344/rih9tpo1r0ancsf2z5am.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510344/vbbzvshwmc4mo4dvlbvh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510345/qw9bxufvpdpmeevd4euf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510347/jmqv1imtec1qvn7ndis8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510347/bja6prvzt6c91rfiqdy0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510348/ceihopsoxutmdj0ljnis.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510349/jd3rwbaasi64mooyqiif.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510351/ig8yhfdd3mfss9cimu2v.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510351/dqjm4qojpx0xqt7fper5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510353/mz7qlofouulxxjipsujv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510353/siihu8mjeb3gpi9pup1h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510354/eguyoqfiy63lokpf5pin.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510355/lzx8g4griroopiybcwgs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510356/ispyy5dj2l5vypjytp1e.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510357/iwnucuhw7vx1yuavcwku.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510357/zhrfdtao29c3hv4qdnpo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510358/vkgvgwcg6xwrgs2pmbug.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510359/uacbxjjpzx7tu0ofwjrj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510360/q9udic5wo8vttciexsn1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510361/ok2mdln3ceeqz8ajlluh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510362/ntjab9k7wkan9xt9nsch.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510363/onahzmeb4brn3pdd9hqr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510364/q09tk4akehkyq7tq0rqc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510365/jr8azeijxhsfatrz1avp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510366/jxeww7biap69thpmizex.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510366/kf7o5bqxacnq91apaklx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510367/epsm33nfjsefwtdzxmdi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510368/rpscu2otlygltoafe4lv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510369/zmjoe1of5xqh4id6xj48.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510370/vguxfi5z2sres4way09y.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510371/cqz8ulli5axkpelpdcso.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510372/e8isjrzat0cuyqpictze.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510372/tn7mt8wmgjotrr17sqa3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510374/nkmgn4ezz5fahjnyz1ob.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510375/bzxx26pigpglcsd02lzh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510375/ktkkb0anhfnoitrmx2li.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510376/j6b63odojnv1ywtgatyg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510378/qdmpxasmkvoiwxxyxmtz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510378/fxcbmcksnzsz5mz2aehy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510379/adyona9escjo30v301gl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510380/hvltyfrqmsg2xjrzdr9u.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510381/mysgiqdrjll1ffhnpcpb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510381/uapyxuaxtjxrs2vek2kk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510382/cb6sd7avb6wsaanoflij.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510383/shivbhwpndk9daqzwiyo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510384/apph2ccttslhgwyss773.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510386/bgxf76jwgveoxxg4cyd6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510386/hxs7hlunwwriozoq2kjf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510387/pjugrjwh3gsyjigb3gcw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510389/zqqhtzw0bbu3pj52bcnv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510390/xa2vdbud0l9qujcy0vxh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510391/fhhxg4kzlribtqu8gqnj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510391/b2uzlfpgxjwa8g3fivqe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510392/agyixzfsqol6wq5dujxk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510393/pt6frtj7fpj4xmzxkjfj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510393/tuqwhrnrxyhymjpwgomk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510394/udwybkivxzmla9akcagz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510395/aaxcdm2owh901ppxasul.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510396/kskskfjfeyswgmxwew41.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510396/dldha0p6e4ovgshom8k2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510397/f1hkyawikt3h6jkdcrkp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510398/zvualm1oxsmbhauhmo1u.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510399/wtafhhq4bphlzqy6hx11.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510399/otvaddicftr5i7z7ajvu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510400/c4hlzy81r7hn0n2go6xg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510401/fffndpqjvhnpj4llq85o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510403/vme6nzccpdew6tr27mfr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510403/vks5lxwwxzsi4flvcljz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510404/wizb7pl6wrwmzvhgzahd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785510405/fmzp6xq1gftyutt4nx23.jpg",
      ],
      2: [
        "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513770/dtjntlxjnzws1dges8hb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513772/nemvs1e01sy3l8fethqk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513774/n7eydm4rgpn52lcjnovj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513776/s5vube07muhnj59vfd0r.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513777/uigyqwomkcim2a8k8lnr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513778/xtvityrodtigng7imiqf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513779/ppeymqqm91b45q0i0o1z.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513780/mjpsdsi0mqun5t1ali9i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513781/ydedomejfxvrbktjls3o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513783/l0iv5pd72pvhtac3njce.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513785/thg04pdnyhfmng10xnjj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513786/tevhpzybtrfgxwq1i531.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513788/zkhnurzoovx6wjifcsft.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513790/vzuwzk3mlqz8dluccbsx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513799/tcikj2z6rvsmwsxmttvy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513802/q8fond2mtdew1dctvw3a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513803/fdrnggemyustshqgxr66.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513805/g7uat4tmaudzelr75vi4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513806/truonmwj3wozkxozkixw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513808/b5fjb6rfabebav1v38nv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513809/u01gzznp92wpyallvs8f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513811/gt81sdqgawnhj5kxgunv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513811/bsezucbbcbgwdn9cax35.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513812/o9waifehfbxfkp7tpgn4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513813/uzsgihfeolyxh5juxn3i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513814/vyaaxx0tyenyez7ouu4e.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513817/i54yqq079kanbsohuccs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513818/ek8slcxoazaiznntuc81.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513824/tnyklypvxwyu1hl17vte.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513824/zpep3pbnq9dnaxfbfyl3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513828/iajd0ccjbtgxjtv54fqq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513831/xqlfpq2fn368djeyfyk9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513833/hxcpjrvfrsovbruirviu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513836/nbheaq4ixucdv0aszupp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513838/hb682shxkgbyiihhfsyb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513839/rbaqzdskxbrv76jckjdu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513839/av4co1myb7xsqpolbhzn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513840/imbybbxeuwfabxiv1rme.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513841/s4u2pb1z2thlputjeotw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513842/iuhszaor1zfyrdklkdt6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513843/pbnlxlapf6qca1pru5ux.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513844/otelvfpyudrokcpyamhy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513845/z1qvqgitjwkhdtvhdswk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513845/vxcsaxj4g9cb8cgnsdr8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513846/bxmuciylhbj7kue13ybp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513847/muy3nuliunatmkocvnis.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513848/dklsdnchrsfqz0bkfgnq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513848/ndaati3bc1abdcww2fzq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513849/i8s0rx9mn6csjylrkvyz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513850/hvfescs9ufxy6etr9c42.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513851/ii4ycwbekhhnq7zrnqw4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513851/rkjp6i5e7kfi0dzj8p0j.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513852/i8jfq2ujzidbpav5ympf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513853/xmthm8palwhgeuubfv3s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513854/kn9lrmbe065ky4n0fkmc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513854/qwymozqxktpk6cgib80d.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513855/e69qdaypbaymzj2drc03.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513856/q5rzdidgycvqfgo22ecc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513857/oy6zsajddvmyspcncnzi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513858/yxm8d8dzederutwtxye1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513858/rlwpmwfizyhothfn89jo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513859/n592famfao5oz2szkfny.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513860/xhdousjf6fw9iwuntrd2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785513861/xd52o6fx5jtl8pomuipn.jpg"
    ],
      "3": [
        "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515114/bpcsdyxvdbcdyobcmcgu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515118/p9987dkp0nv77iwncpoj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515120/zk9nmsojwoqjdoi7wvb6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515122/luushgzle225i7mksboh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515123/mhwxnzorasm4mdamkutg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515124/intbm0f9ju5jn3rvqrag.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515125/tcstr2zuot8dikykocq2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515125/xakyiapy2tabaldtajmp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515126/y8keefirrpdtimxlc5vg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515127/jjvuhwh4rp0kcfrylnar.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515128/rvk0u72yigfvlyhywfkw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515129/d4mhmv4e28lwwomcmeio.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515130/ygdpcplo8y0b1orw6p5f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515131/upsgyzndjcegst5swc9x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515132/il1hgbtqtvc66mo8io9e.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515133/aclbjedo0iyatxzhyuef.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515137/giiv1mcrarjgcrsbepky.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515138/iuqf482kzw74k6l96az8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515140/zjqwvy6tltekyntcqn3b.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515141/bieuk0tugw6ihouakf0l.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515142/y6fsslokzxvrxhwg2hav.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515145/qzawnkfdpy0iqduw9p0j.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515146/wcdn87wq7o3opkyt2o7b.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515147/nymnm4empcs4skwon9jd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515149/h6vwsvp0asogz08kh4kg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515150/tlbdzjkx65zvlua2e4el.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515151/pd7oezvqrgpfkmjfkiql.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515153/yfrzytty9wjde7crdcww.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515156/bq6c8bcchwhyjqcqgl7y.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515159/mvv9vrksvtpd6u6xwvlx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515163/ibkyj2ohxxhb4w6yl2wr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515164/gfpp9fq7re6fdacphwyt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515165/di2zqdeirrzxhgy0d79g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515170/ccatxmepkvqpldlz5sqk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515173/tnx0q7piyvcjmjawv2wr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515175/ndwqcjycnfhtf5tdbqwt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515176/aaruyaoxrhof3rhtvcl7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515178/qtsvexuknwwgheznmggn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515179/cix4iimasolq1urrf4t7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515180/zmefjou3mpvswz0zzgk0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515182/mi5javfcodvsku4h56gd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515183/m1korrray1k5crebvknd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515184/pg5sbhh1mz5kokadspdk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515185/sodch1nrsit4upcdud4a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515186/wfvcx8c7w719e64pjx70.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515187/w4jlpuaq5ptvb3ol54i3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515187/bwwwcehppepf8syoslvu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515189/ibpnwvzqoccgnegcwhho.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515190/jvi2hpxcspkchsw2pdmx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515191/gb9tyfasam11nwcvkqpd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515192/pijth08p7gurw7zhyh1x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515192/zncx1pperfnby6mpaoyi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515193/ztp0r5cqkdfvwusmditt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515194/zy3jbqb1weknhpydltpr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515195/ejngxxfoy5lgqe8baa05.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515196/iwldfyugunat1vfizojh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515197/zffngii1tul1dciggwoh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515197/reic4anpyjgvpfhe4jm8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515198/kist4ehxxkwktucvqny4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515199/sj5aoejrgrhjpkrxxzav.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515200/drndoigwikqwsn8m0adh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515201/msvi0mqi9rlumce026cs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515204/iv9u99r719jdcsigfwgg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515204/ptvbec2litlorhnzkkae.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515206/gzdu2gxf6guymz2y6et3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515207/fqiumsdw7ulmyoqpkuzb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515208/ycd4xonq7rzozcy4qxcx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515209/tpvujbjhbeseptnegn1l.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515210/nnlurqya5roowkra7w8b.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515210/a0sxkfydrt0umedis2nt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515211/tmlqfgdunraqsthaxuku.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515212/xqnvu2ldtmfkrraz0vkf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515214/eh69pddaksjqc7bqkza2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515214/rjrqhfoxwqc81bmzqddd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515215/xu5n0tqj5qrxfmjz5ggy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515216/g1cjumoqvvegm2k37jx0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515216/we0di0g3v1y3ealwzxoz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515218/jgrqdbcl68pg7plrqjxe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515219/wx4wp9tefgymgujcof19.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515220/g0vzw7uzz30ndnta7eia.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515222/yqx58onvpm1j1vm24ypd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515225/k6xroa8gxhjxnqzsgtd1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515225/hgsmecuq3n8jsrueayyc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515226/dfmdxa1gwrzqvpcb7u2g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515227/yxm2teqye4iltd0fhcm2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515228/gixf2aphm83hlmd14jvl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515230/doqxksgi0ofkhi4ldfm3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515231/c0ykhhnsgxqgons3zicv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515232/ioajm9ibvjqiu5dmfxzj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515233/q2thj8rckisdnkdr4n9l.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515234/rfn55yojedvrmwrhl347.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515235/zdeejh4lug2hudueke9f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515236/wjbic6qvs3qezwwiuf1m.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515237/vqcjcrkdajxwt9wertsm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515238/i3xxraroc7lo2gwrvu4l.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515239/uygpvsa7n7glyzpz708d.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515240/gac2h1obugkcdbmlakbh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515241/vtmfrbi5k5tzffgnm1rz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515242/cljflfffso72uxlpujyc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515242/unjvlwh1uf76mraftsit.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515243/mdrb6npp2hvkcvlwrfwh.jpg"
    ],
      "4": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515937/ek6sezavqklgov7gsslk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515937/ycfsngtb2wmg60wl1l8x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515937/xz3fswkknq40buylb3gh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515937/fidbd3yu0msjbzkgpmnn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515938/jppvirxha1szgdn59okd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515938/drgpdwytgscqsy54ppjz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515938/y7vdnplac45s32d8ijvm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515938/i8ujavmwvyz9vdcja6tv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515938/h1foj4j9ou5xlfbsfbfy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515939/oombupabenqypmuw93e5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515939/gy1hwiyayivawksjf7yf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515939/alzct0k4qivivfpql9yg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515940/nufeot2h9xrvmahqygn0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515940/dmvpl2keoneffjprfzox.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515940/trenakjjco1u0mbft9il.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515940/ao3bsmzddjkctrb9sfwv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515940/zbijcd9o1yhqfck0wmmt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515941/buxmlrrq19deppeixfhi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515943/qmwvc7xbq2oq3krazg20.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515943/vopnguooaujyxlljnfsj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515942/m1lqqxy6m7kh4d7vaatv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515942/fusexqgt3mwmekeccwyy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515943/akjasjywvacngehqactz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515943/kiujzcggzd06t8oqxcm2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515944/r2iy6jlybjjimo9ndgnf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515944/pjknklxr5kpdwcdmrhaa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515944/jvr1p7zvszkll8hbcnck.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515944/sb76v5nrpamvirt5eo7q.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515944/scidmxmopbqwkh3hx7b1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515946/edmbzcuu01w1ruoc4stw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515946/kqliaf2qn1z7bdwr33hg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515949/puylwymqehzv27lddtzz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515946/i21mbhtcisiez7tqetxm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515946/vgxou4qmufbsmrmsyf4q.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515947/zvrdw12gwyu8oleu3bax.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515947/udbtjmobggtbn1oszkdo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515947/daixhromr0e9lfl8yzja.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515948/xfl3dwtm1yvr5guy8yuw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515948/trjs9fv2wi1f9b23ehvl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515948/lsecrf5yuuyikvfvlbzl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515949/ss09d6cyc4bba4tstiql.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515949/vovoslkml8tghmzmym0r.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515949/asgdccrwica5wxlavqgc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515950/bgucwgzhbafi7cpscwsi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515950/mj1wmzib4cdmlkt6x8u1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515950/jo5kmrhq8sw93jcvhauw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515950/mmd9zeuqpbn6dcuqbwzy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515950/nl6rezmxodnvcx0lfbog.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515950/rmp2prapitgmrsvwtgwb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515951/uhzxm1y7lmp4ql0rcetd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515951/omtwcoqgeykm0wiv4tl7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515951/xknzafwfu8nou1kwc8nt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515951/wzpg1ozcca64as6lkdqm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515952/bonclbqvnhvbv0g9lgi2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515952/saugpdq5l6tfbvez4l67.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515952/hzlqlsh7rz66emyigm9o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515953/pqzinqghucc8xvqtfmxs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515953/syamyl0kozhzytyelhq4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515953/gqhmlger4w2gqnvg48sc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515953/wdsqcikgjwgxhvpnykyh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515953/omzo4biyqd5csnie2czs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515954/uudaqayfkmy9hraqlk3b.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515954/vnrjnjnufaohep5mk8c7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515954/tmu8prop2tgmuzsmvyqc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515954/criavgml6n7v8djbi2qr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515954/vyem0ibi78te5gakzhny.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515954/xxuol1ikgkhsqqpwifxj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515955/tcgudttjwy5g0ldk5tcu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515955/ptjc1jhtlewntnzltfys.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515955/v7unhs7tr4ki1rpi2q1c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515955/uofnrfiflmqvmedzomy8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515955/hbqyqbpfcxnxsfpdpkhj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515956/aot2kjnmlilbyvoostb5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515956/g1ugmfjdwaev6r5k8fx1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515956/bso9mol4zefikcbx22jo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515956/vzswpudwpw2dtronwjb1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515956/qkr5z6graqlpu3rgboay.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515957/zk9qnudfzmoxz0idw7pc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515957/b9le7v4evpksel2djldr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515957/skgmtegfavkblo2anoox.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515957/zd6izux2tzw0rk0xhbai.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515957/r2axlbta913zolqytmyb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515957/fwjiepuupmnetdvdefc3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515958/ol7ctni2areqxcnk11ai.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515958/ypttk0of22qcezagx8fg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515958/acj5zwphh5pvbdmcdteo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515958/wshvbxnlajcynwkjvefb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515958/eenj3enzl5zks9hj7v9i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515959/f14vzvb9txg0ltqaeega.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515959/olv2t7ywkkiqu8tqsk8s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515959/yanvsalpzz9fyla8wifu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515960/bfhwomjpgc1gjohe212a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515960/nmvrwkqo2vhpfu5ercs9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515960/ltodmw0xqewut4kcgxjz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515960/rqmn8osgt1wwt9eosrme.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515961/kcs0pemukwiyyvlzzjs9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515961/enqleohz55d6l0moctej.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515961/hugaerdnwjjvbgltwi7q.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515961/tbonxyxle3w5rohrxmee.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515961/kwvrr3beqdr7mqx4uahe.jpg"
    ],
    "5": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515963/moq6yxpom0byzbdyski8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515963/pjcyk3auswzxhxukof6s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515963/i33srwyj1b708f5wugoj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515964/zlfanrrx7akv4xivseaw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515964/fdkdosyrwhazcet7kplq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515964/ed5rhfnf4pwo50atkfi3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515965/gicd4ds36cwwqhaeqc2g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515965/ioulfeppmy88ih4fra3e.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515972/nmrjuhiwzw4a4vyduige.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515966/bmq9twzcfdodco3tgoqm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515966/jwr0w4bd7ff8d1jxoorx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515966/q6j6yoos46najr94mcve.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515967/jptt3jekveshzlgtef9m.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515967/p9wr1cxwvh1ffbhww7rk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515968/eayckbqhr5eb0jfx4dwx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515967/tinvc0vnmcqynj2kgy0g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515969/spkkynddxb7vd8xcj0wh.jpg"
    ],
    "6": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515977/cvgaykqjqxyxgxo8crl0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515974/kf4a9rylr9lrubswhqld.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515973/nnyexraqjcjj5qnpgo9j.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515974/d5hbzdgm2jivioln33bg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515975/be73xdz2hqerqxd2secd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515976/fowuqxk5y0i8ziujsvyf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515976/szbqjm9rwtaweb0i9oxg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515977/uby0us5klhboiqlp7wym.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515978/eds98ynxfwnchew3o9dr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515979/fvjlsefzighltjac2oev.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515980/daighwcepl9zprqioedv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515978/syhlbgpncdauznrubkf4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515979/zeqyb2mmmy3ucauahmi8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515980/ohkoxl4vmxtgpk5p6tdl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515981/swl2yhmj5dr3tkpzklv5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515982/xinjv29pm3a3pxc8znto.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515982/dqdvwnusfmogsgktgwrz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515982/wmawdbo0cwpehlj06l4q.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515983/xa35ziiw4gsijhejpizv.jpg"
    ],
    "7": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515985/yqzju90woxjly5scmqka.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515985/ug4mr6x08ab1hbj4i8yq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515986/oqep65e9c7yz2msfcjvt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515986/xpcv93afm8c5dsqll2nf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515987/rzcgrpxa8yy0nmeir7c4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515987/avfoxudkvfsz5wbrsyxv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515988/sikpkgspjmimd6an7phu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515988/uomvdpnjf5xgjgnu5kcc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515990/b9pfkc9wlbk9t8pii8ge.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515990/x1iiuyrrwtvrgdffnyc9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515989/rdzavgr5h8i9pg0ftdmw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515991/htfr0sxt5ottugwwagnv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515991/b8zdkmdunphujvznalxn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515991/bc4abxrnt2k8dqonbqar.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515991/izxs4ngvr2ikyj0rjbns.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515993/e93btt23mxumx2aq4jwc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515993/dgjrhidtx2px3nlvkire.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515993/hsgtjjq1oi4ud3mpyyne.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515993/x3xxxs3kuecfhsfkmo3o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515994/dfuvmcg2adthljcjlxkq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515995/rxbepxgfzugpwualvrby.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515996/t3wjfovxzrg3189mr9vk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515995/nn9ziarrmbinu7auhlc5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515995/w1fx719kbevy7x2hmmof.jpg"
    ],
    "8": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515997/r7nvsrrxorzw2xely7nc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515997/ryixaumwqn0xkkmuls1j.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515998/ejai3xbntxdkbpjojqcp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515997/uuvdqmvpodgo47704t0a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515998/sai4waejny4ovk8r7zcv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516000/y3lpaetbygaybjivbwxd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515999/uqqagutlutgqbvw3tk3w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515999/chbptwbczazk86bii1qd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785515999/sq3pxx1bg9l4xqa0qr0w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516000/gb5w000tmejmbfjrw3c2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516001/sjslydbg8ov06jtbf0cm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516001/qvuf3sqhzvawvo3ofg0x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516001/kehuut01qwv7gf39ncsb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516001/jtjxhb2crwjwze9gaqhu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516002/tzeiarhojsswwgmy61wq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516004/jkd4yiecqrwgeuzme6wr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516003/fepxulpk7za1kcm7pwdw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516003/fplxjucy2xpzg4kvcaea.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516003/zddtzxldojswa2h2rxlb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516004/yf39p9pviobn8vm66qvh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516005/llifdpr4yewhdfsyafjq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516006/fylvrlyq3k9frxy49tls.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516006/izuhw2fbbfocqjceqib7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516006/t4iveqhslznczv3k401d.jpg"
    ],
    "9": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516007/mpgkxxisq3d0hel6kr96.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516007/o6mclwsrsjda0gohhliz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516007/nenonftb17ak5kgkzekm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516007/lwk7smnq18ljmnxmhnig.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516010/jyldf1hqs2nldbnzadlf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516008/qfwgebidrpcbalha7c7k.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516009/mkpathj1lgiaqzxsnun6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516009/frugznwjovdvkcxrrjs2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516009/esthfknkhfb5dige9dbw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516011/o99iot7clgp8lshlnxo9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516011/glq4fcjrlobpelz4nbfw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516011/erpgannnbb7bwfhvnz9z.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516013/gyobl3nu4fhzxdfbticv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516014/yhyywqv3qx7bmvmns2ne.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516012/scmngnr9jhkeurf2uy69.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516014/guuuywswvon3hmbdxtpa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516014/m7pkomcfdvbowyz6nvgh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516016/yohplcugqkoafhuhvcrk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516015/m3gyq8scaexz64bmycdv.jpg"
    ],
    "10": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516020/tywiepxl3ywxssitfd7t.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516017/hviayvgluisekiohvpw3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516020/xniixidyahk231eegpec.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516020/xdq7xa1cnnkrvdz4mrh9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516021/ccty9euvqhhplaeo0nng.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516022/qsto1femmafkd6poxttw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516022/gpgxhvrizf6qrpav0ge0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516023/rj1etyhpzuayuoaiqphp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516023/m3lr8nzegzd7mqdohpa1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516023/h8s8ug1o74j9uuvzlrij.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516024/hlgasordbryw6a3bn3ul.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516024/elpbbuad0jzim0u5b4t7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516026/w9nvti6mrmqhbtcyjxbd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516025/q7rripax7m2zdj3px2jx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516026/i0foseydby2kv1auokg0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516026/aylc1znkoxkpuf8mr7hu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516027/gszopgyki09yynhpe4sk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516027/vidbcttfytz7n2she3ox.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516027/ganxbzpkcry66meheyrq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516027/tzdmaf14cifqb5idkl2h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516028/q1h2w5m6rh78wd4wwsjw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785516029/on5fc5ealwduqtocrhio.jpg"
    ],
    "11": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671553/sac03wholtiex1qwcze1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671554/fpwnoivkqlwb3u5u3sud.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671554/s63zcerfipgztvysqsw4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671555/bjmf3xrp5tqjey6cztgm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671555/mx6ne9rwkgj35m827hfm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671556/ahkalzrym9rg0adrejkm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671558/ickkpbwdfpxm7tp4xgz9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671557/ievh4yaj2zzk5ow90qli.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671558/x58l2acqmw0wlflml18q.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671558/m2co0vkzohnsd6opuybn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671558/q0lwvrov8soyyfujinaw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671559/c8dczgfkdx3abgcplnls.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671562/satndxocibivkwin4ttp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671560/ebu4fj41zwsxq48fnnnr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671561/mecntalt41yseeiq4flw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671561/bupuutxvmyinell3ex87.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671562/pjb5ldvgebcxtnptfahu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671567/uvboqrto2ze0jkfwx1ua.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671563/rta27evvxkq8zim5fqpk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671563/qmeipcf2xp7bftrhu6ki.jpg"
    ],
    "12": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671570/ymuwchooz1twaowsopzp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671569/vlkj0azokylccvcms7au.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671568/clk2xbt4ype8yigbwvra.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671569/n6okaxxsxzdzyy4ixtda.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671569/ajjsuuzfnpjzir46uqxf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671570/n2nylza8sztgmvre5mgl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671570/eoj3umgqc9udsebpxkll.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671571/tjqn9hrbioy7jikhgt76.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671571/naardu9wkel3ozv3cbpf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671571/pqljbi7qqtrqhxopvxll.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671576/swe5al5zi0fjlndkkae7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671574/kq7ezmodorwngwyjvebe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671574/nudeeb4dzc8p6bjrfv4y.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671574/xegajuxsxcevkea4vnrj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671575/flqpcnzsmshfl9dwg5er.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671576/l72eyll8yxvmo7p9lpid.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671576/qxp0t19oipdoy5zgzmqw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671579/km8q2hrsxb7pp5thy2rk.jpg"
    ],
    "13": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671583/kogskwvxmqigfloriymp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671583/aak0mqnazktv5chvm7pr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671583/jtoqx6zgjwgqvkzlnkmd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671582/dej2adtkbwfhajuvfk1v.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671585/fcbiiouriobru1swo7xn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671585/ubrwcuulha7256goyy5b.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671584/nv8fw2pyqcktkvb3acnj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671586/urm2ozffiwc1gmkrgnqn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671587/nsd26jg5rkcn3sc9clb8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671592/kwmigdt55k9xn1u7mh2b.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671587/flc9x9gbze3cucblqxj5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671589/flub1lkru2ghliax6hxx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671589/xzwfreehbim1a3i1zfnt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671589/o9os6uiovjisxsndlrgm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671591/al6f7eeolnwk6oa0x8jl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671591/byxwkb3yzdyktzb9krdq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671593/gng5fncycx1gdbp9saqh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671594/ntraoxvyunl72udgm3qk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671594/dm7hfbodqtanslbxepzn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671595/yhv8cy9z1tajkqhs0kfg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671595/p5nnkmfr8agrmc0ltpkq.jpg"
    ],
    "14": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671596/s2tgasnb0rwy2canx5y2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671596/eyce80gp4juvgdefo2bz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671597/y1ikieg5q5t1upkhqgge.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671598/vmubvkqzwh3gbu5fvi2z.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671598/qoz8y04pa9ur1c5vmp2g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671598/ijufn3u8xi4rfu6qffim.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671602/opmrj3kswgete6r1yocr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671602/tluud5qufniviybayhss.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671599/vp1dwimkwsmdjlleceu9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671601/hwhwptizume9rnftpda7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671602/ktorpp8zsihe6dbibvqa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671604/d0uxcnsanad3hhwntfqy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671606/f3umqdphzrss6bo5cpg3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671604/daoo9oeuztbogqnynrkf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671605/wrzbjcxsobsqrrfnldsy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671605/o9ld0bji2auti0iguqwa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671608/zt8ody9od9qqw324xxfw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671607/qxp2lm2tsyzvr89rmh6e.jpg"
    ],
    "15": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671610/npnpwiyekqnfyqarlnu5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671608/qsrssu5cyenvxqswlkwl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671611/qwnnve6yxsctctai2hav.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671610/vuo8xp4zvy37nqo3ybx4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671610/zirv6ic9kwuqkwot4e8x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671612/e1qblcuqozt4nq9f6tip.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671614/phqaauhe6ce54j63viia.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671613/l2hbomedk9bppbksfpjy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671615/bxwk7myy097sqbytt3pw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671613/hb1mmi3gvfg47em6ei2h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671616/beoovie1rybx4hhe8qev.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671615/n8z4nk14gzfczeonqu9m.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671617/ijocs5k5o2vihpgrgu45.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671616/x7faugcnxvqk4ueiozi6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671618/kq5kqxckmagos06ztjju.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671619/mc0l2ucrumsbqnwisdlk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671618/wzwcqspuq7ve0zlqxp2o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671620/bqzxkj8z1j05ckzshoba.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671619/kosayp9nvmaxcotttrv8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671620/uxt77iwccmsn1yp2euav.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671620/mf4p5mwayv24jhwh4nek.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671623/scnyyls9auc9s7y0iymf.jpg"
    ],
    "16": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671625/qfarciadh3donlfqfkuf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671625/c35xqfscr5fbscjua75c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671625/xwio6xizx3e2dddx87cp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671624/ihgcardmvh0crjadf1ie.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671627/yhrr2q0arzka8yezlpua.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671631/aqe1kpo3hd7e3ydv9nc3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671629/wz7gws1gorjpopkjm4oj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671628/ky5tevwq9nzlqcpokvbx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671629/yyg5dvoadcbvus4immp3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671630/ar2jo9ibynarbjrpkfyi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671636/wf1xj53igxpfha2tzrwc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671632/f3mikgwabe4bjjs79tt1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671633/lwdbdpnnyvkvbjj00wx1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671634/jlngmmmv9veu7he3vkxx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671635/twi1yamyz0rcjs9wp1ya.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671636/yrcftbmrqu7vvt6t2ljl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671637/bhaddmmtj6cgwluomdln.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671637/wdd4am0goehktjdwolg7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671639/stjt9da7hxwy5e6epeap.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671639/nvqigggh2fapmikkkngp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671639/o23zd6czyye2lob1wpqf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671640/xtjbwvcmvhejgsnidc9s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671641/crqahk272wyinhny75oy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671641/bs2gevxb7waebcjlsulj.jpg"
    ],
    "17": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671643/fmjjq03xqvv5aqnrkb37.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671643/ywlhsshjja4up7ssozmh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671645/w1ttkkzgptnpg9e4fuzm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671647/xwhlytj5f7wxnq77uxql.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671645/lxnyreietms0ujugu5np.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671646/srabpmhuppttshrt5gtw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671648/ujwwmiiarpkoh5tzdboe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671648/hycjefjzxkhox7u12csr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671649/y9hcw2qazgysdvxra2xd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671658/lz5zjp0ka0bp9ux0yls4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671653/uelj5v8n2uprbdwk02rb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671653/mgecy6rqecbg7bf8wduz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671657/hiw2cqxdipytek0bhhel.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671659/nivnnfizluoz2aafnvhf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671659/gmrx24e3syq2jyorg53l.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671661/nxbjgxfaamyr4o8jgnog.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671661/rkwm9jbgxopzyxrztwtp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671662/q7nzdbvv6c37qtmpiata.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671663/ns3mh19r1wymclczodp0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671664/l7cbs0ivouyirhpysypz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671664/ja1u45umjvfuibti6pjh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671665/wlpe5g7l0v7a1erh3aj5.jpg"
    ],
    "18": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671668/ufjn4yf5giz9ikiioyvx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671667/hpuey1uvg4aganmbznim.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671670/vry4ni2w0tuw7yevbo1c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671669/dxi8puerqckn9qmgyyhn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671669/q0oiqbfzsbyk7t6yyen9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671672/wdttnycilmt53oukeau5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671672/oqkmhesf6gmnj678mnyi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671671/yxp1aw3u2zt6j89deagl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671675/oyjcnd7pf8zopmjyjlx6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671672/izkrrm2cnuvzdpp0wtoh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671673/g2injnfqkfasvoj74ihc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671677/cwq6rpd7pzbcnrdafo1o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671674/grhyiaghxr06bjyyh7i2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671676/uefvw2g4sm6li7xihxh0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671675/oamzislwc2va6cu7jxya.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671676/jm7hvbp6zblgo2dm5fcq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671677/vdluf0mfenwpig6jagkg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671678/myonwtrwubfx5n3koxhh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671678/vlink5gzqmucn4ux7kku.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671679/ix3pzdvz86c7jvm1b21y.jpg"
    ],
    "19": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671681/vdlhu8yofrcmij38k2as.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671680/sms4vwryc8tzn4qpo4xo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671682/cqkonjoypeslkctbrtpy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671682/fm5ivwoduv6k1ggb00tw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671682/bdgrbhsunauxp7gvbdir.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671684/st3jspc2x84heabzhc7f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671683/dzdgdyiau3uhldu6vjgm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671686/hfu2vgynvt2ctzgudg1a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671685/gpqafkuflvtys2hfiosz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671685/whkm9vz7fa8ydnnucnne.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671687/si2m3mfoqdpry1o7lrur.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671687/prdivsllgyuesj8m7swl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671686/jkef3ilar3rgjm8s549q.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671700/ppir0nkxzsaj7o4rle7o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671688/ncqrpaeeis7honcfiizx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671689/agtvsnecfmfwm0gok3m2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671690/vsx209zeroyndwm2hoxf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671690/t3yirhgkradessrktfxa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671690/mhbss22eyhrngkmr5sba.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671693/kh2rwzzvt6bucxvgu8aa.jpg"
    ],
    "20": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671705/kgtpeqawnsupdgfy5tr5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671704/nl5ngg6lz7uluhvtikng.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671703/atrquluyxuef5woggtvd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671704/dt7uobckvejx0dnxc6kz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671706/scg4mriwxqe5y7gjevvc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671707/jwcs2guc4akvqtrxmebb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671706/ukg8y3dypdwzdhgl83ur.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671711/yn1ylejrueo2chiilfuu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671712/kcuxabyg6c4t3gki1is6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671708/aytrxilv1jpjrhb9hw2g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671710/sc0okogpmven9seimzyh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671710/zfqloooj6wlsdoytpuhd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671717/c0xtz0ckdiitxrpgakqo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671714/hgp8b9zgz6uwqbat7nkw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671720/pdl9iqn5blarwk7sbty2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671716/wievgk86hltamqm6chuk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671717/e2gweg60mproxak6xc4k.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671718/cnuyjuctqw45q4enwoec.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671724/czlnjd8odrtfdzjfndbo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671721/kfjge4v1cjak8kbyjyt6.jpg"
    ],
    "21": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671730/f9kgaxoiqgedxyme2thl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671728/e9bswvpoksazvxlczh0o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671729/illgxxhkqjspsh3d8wxy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671727/gzgozmye358kpe2ennez.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671730/vl14rqr9lucs4oyivjxb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671737/v46tevobmqb70ds51bzx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671739/cy8basrepphsfrdffbwd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671733/isn4jv1taix6l8vwkzxv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671736/ptjvz1imokectc1s9lmh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671737/wz5gbc7ghsrubozlyvjk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671743/p92ifd2mm2pvfqqfad7s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671740/ykczzuvpnuciilahajtx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671742/ydmrdvj5hsmubpyphxvh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671747/tpyc8e1ihjmtj7uoh3pb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671748/qoblzvkc8xooge21jzci.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671745/t9snwqzhzjmjnokqx5zq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671747/lkw8ry0lbcxhxnsgn4px.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671748/kvlryplyij0uqgiq3pyy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671764/j9lxxigddnzmjb0klkts.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671750/zyurqav6cpm8seetg6bl.jpg"
    ],
    "22": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671768/dvywklyh0belowicsmla.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671766/w2n1d0rauosaptnlwuor.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671773/dzonlulagvszbofk3ead.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671770/mp3jzew5xmsyxk2ogjwg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671777/vpyvy2rm0rq2ezsxyonp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671777/vq28wy1htywsc4ogrn3p.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671784/hpnvwhc2bhillopvxwdr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671784/emkhgrvefikcbakwymym.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671789/iyhawqwlqx5gbyqb5vrw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671787/zsx181mn6crz89ptlvmz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671798/qaj3mtmrrjx9d2iyu2bs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671798/xrt8jsuzzefn8u6s4yta.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671798/lxp5e2qm3h4vamtvev55.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671814/mdzhowjowz23ykyc08qw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671812/agjeifu22oxoq1v8htyl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671812/xrz4cnhvtbbdwevklsxd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671805/nvpo4hekluj7zbixhoru.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671813/ypuheggwnvxheyxzy883.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671823/jl4ryulfxvgritbrjbo3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671822/beraag4noinivzznn9qn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671820/vwblnwjwzf3xbdzjeae6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671822/tdupwt7wfnytoizwnsqi.jpg"
    ],
    "23": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671828/j01sbdpt8xza6saa0eib.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671827/gz276xjswctocjovpyq5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671839/xsmdlt7u35jyqoxkaaup.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671831/hjbky7jt5jhcuzhrnf0n.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671849/kjcibrtuhg2xpfuta35n.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671838/nnfldapbrzp4c1otttoc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671845/w5qfbfqcfb6gohgy4gap.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671876/j6ligtj5prbotzhwptnv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671853/useby9zcrz7w3np4rrak.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671855/j8x5qsbguaodlx2zgl3g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671861/m0qsycqixxmmrkiivfrk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671858/venubdhqjenwxosmgkao.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671875/suidllyk95rbjrvvztxu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671869/g7wtfuh0qgjonn0jmoz8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671869/cfdm4yu1fjgcyl8d2bkq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671875/oi7k2ikyaaof0rp5hg9f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671882/gkad5m1jrq6uouisnhe0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671887/pwanu2og6shvmvivelym.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671889/wqsnzdhohv75w1g9abjb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671916/i2lw92g7hdfsznhblh9k.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671889/xmlk6ffgtjeqmmkyufjl.jpg"
    ],
    "24": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671923/my3ljgyaptirmixcvks7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671921/kmsghprw2gzdkeqqsczx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671924/edqcgasrtyujwda4ofab.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671922/vfchjoyi3zojyijxxzzq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671928/ttw3gbhde7exssgpjjvi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671926/ypkinofy0nzttr6wmw0k.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671928/itrk6p8z94zs1dup5o3c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671937/lmgdofshabl28uktawws.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671934/kfjhvrc8fuwpesmz77pb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671936/iurysjaanebjbg15whn6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671964/vd5r8bhxwb8vbpoy0tnq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671938/s7myx7bxacgssmhgpxo1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671940/mdf1q4jott59rquxupmx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671953/livtyafl1spdvg1ldm7s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671946/tybjwx5gespu3chmre1e.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671958/ybbkliflgvr2qyeudjgc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671960/icwtvizcikqzgwwclqwq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671958/g9sziygzlqmn71olxxhh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671960/wfsfzjz7bpamx0rer2eh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671968/domx0gjhpjgunkaugaas.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671966/aqg220bxjhrkw9o9c86v.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671965/a0kdcafuwyfdcnyffh6s.jpg"
    ],
    "25": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671973/i33m0hakt1qislsowefq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671971/fcdz4nzt99lvmbl5jbql.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671973/rlfwfmf2m7l3hwchbuap.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671977/domdiyccuwowkdlm9evl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671979/ohhlxzt6pa4hpbvdzvyz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671980/djwpivuijigskegjz5tb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671979/tkrftuvw7vzmmbkoq7ff.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671985/unf98xggtboxbg8ftlbo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671982/mroj5tzdewweakedi68x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671988/mzmmlwjdkifc0ta8apto.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671985/bkfu9evoc8ot17kjak5u.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671987/sbhjwbvsdshrdhprktez.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671987/nfshjsyf9d3t5ep5dhmd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671994/sw27uedqnacekyt852yk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671990/c6jvepxerqmsluurtmjx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671994/eeqorgdrkuowq0avrhzf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671994/whkxojwfraouihxbvcaj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671994/zywpzltgn0diywagihte.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785671998/p1t8utnb36ucpfcuswdg.jpg"
    ],
    "26": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672000/bctpurpif3ntcpfr3dns.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672000/bylfgn9okk7n6m9kvzms.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672002/na4qng1hhzlieqghurcl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672002/kehxanft6yjbf5jd9baf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672002/pzmvf2xzu1qsoxj3dt8g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672002/tbyvp951acqad0ul2go4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672006/grwuokm79zfz6gndgkb3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672006/drdtq1u7ozrtztmgbycw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672005/ufpqkbdopg7fnbpvn68w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672006/wl102aieqsgbubk0rehh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672008/r2pbhceoojolbvdvudpf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672015/u9a67bvwyiysnmx1iqlu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672010/jqc8q2gyhsw8alom6uvs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672016/oipeiihrqppbfzdnbrlv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672012/vi9evw9thz6ypho4hihd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672018/v6pivw7r4ay6er2kkwtm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672015/iuxb7aetjpun75curdpf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672022/xmqrzosgmjhsxyuja7lk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672020/mjtc2uaiumgigv9gi7qy.jpg"
    ],
    "27": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672023/spjwqlq2kbk18ma6vbke.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672023/p6qfyptmpe8rwaqhu0e4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672028/mpggqsos2rw6jv6c9prd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672026/z87t20amf2h9g76vcm1c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672026/begzpl7z1lrjuzwbih5s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672028/aebogzkl7dkm27kejgex.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672027/xghinxm3fzp8wo6ex2cs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672029/uitko2fevbaq9mhmecyd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672030/l9hn9x6nl5jzd1dapvj6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672032/hrxyetxloblcr5elll14.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672031/ydsevphcflh08e3mfgj1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672031/azylionyveuaaoitfhsc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672031/mmykwsri1fkuwiqpp1o8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672034/qghk2f35662igimnn7nz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672034/h6iws9mfhjwsjh03pbbp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672034/uro7x6w6f1djllanq23x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672036/nt3608tr34hgplnbxiwi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672035/psrruxgjvntbukxvar8g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672035/wbb3lfktwbbvyazlzc3s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672036/yjnetye5kfiwtp76ky7q.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672037/z7rmhciqfrhhfaok44cf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672037/b9n6gxdoncelrcyefhvk.jpg"
    ],
    "28": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672039/g80ufcykc2fymyy8at3b.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672039/vb7yhhrejacujjupiq0c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672040/d4p5dllrqwmsqxyeyo84.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672043/zhrf1egftqtmbzgqwrh2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672041/joggc4xojvoptko9meqm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672042/mxc9m4zctsfqllrpthdn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672043/byibu9mmvswdnhbytgfu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672044/im8rwppsnk7kd31vu73p.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672044/y0nkhmlfa92gcure5hkz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672046/dviq3tq5soxpre1g5xyt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672047/mp4dkphv3obuvmfbfd15.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672046/k7ijo2v4gvqll50vrqld.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672046/xxk1wi0gz9imam96cg6i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672050/noq1spdakl7djy95cpsh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672049/gfk9zlw0b0c7fosmd65s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672049/fcu1ggtzxmvkdljcl6jd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672051/mj4sm5uuezkoliygt6w9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672052/mdqukivgbaxyfr60d3dl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672053/rrtnehpsf7a0yugenoie.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672054/a2tbn9vjen4fgzwgbusr.jpg"
    ],
    "29": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672057/rl3kj5yrikigomc54h97.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672056/ly714vluexvghuvat8j0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672059/eiqa3rkgdnbyj2qria73.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672058/bkzcatbjqjjahj5ov0vh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672068/dt4xdxamk8lihs7d15or.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672080/nfb6r1atmarc46gxllc4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672061/vfsuv1p7gnrprgi7hrkq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672072/yvadxaxvgvhdaedrxrh0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672073/fnkdmkyfkyr93nwggcgu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672073/jnrnhb8txk0v1lnqwkj7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672088/mrvs5oiv6ryr0splwgzk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672079/jzzn64jojqp6idtz01if.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672076/lbv1qmftigqsmmigjcgr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672078/s4vqwyubfaq01s5tdsrw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672080/ink4xgawmtb7zzb80m8m.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672083/uzopjrexmogbckfnqvsp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672083/y5ski9gzevlg2t6qzomt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672088/nrzmbmy0e46pqpafstry.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672086/tqbbakvbfanzqxecy3pq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672085/uq5kkbpmomlqtwpbn7l1.jpg"
    ],
    "30": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672092/u2okf2c0s248avrdpybv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672091/w48rgzgpwg8rcv22lpff.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672092/ckmzxfpdgijpcu9e162q.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672092/h8f7tw9aqtugzvzcnlny.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672101/psnczpj9jqbxv2zqamfi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672094/waumwlsbl5utc3kekxhl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672103/earmtnwqkjqgznawyxpo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672101/qo4iv5wo0sby4dkj4wbw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672097/j3kumusao7tjtcva0orm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672100/dgd3grfg21hwhlrz1rtz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672104/zarpx7akl5xlkvcaqyrw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672108/xsqfquvjeclq1znrsfrp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672107/ct8fexpg8xpaso8exhg4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672122/jflf4ptxyaiwmbylckxl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672109/qwccm3foupwoubyaryjp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672112/et33ufgzwbjrc0ezpzxv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672119/tr3moivjnbxjfogndb4h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672116/sbtz82ufh04h1xpnhq2i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672119/p1umoato7hw5x8p1puj9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672119/ianapsvsqwidj8dc7lu6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672122/zt3bvdrqd4zmoji93cln.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672125/aat4hkubzs2awvhzswxt.jpg"
    ],
    "31": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672131/pqwetl01o0p7mwhd9thq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672128/crxfjch8dwzo9u0yjrno.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672134/uvgjjrsxb2mvmn2dtl9s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672128/e2mwqorlox6mog24opox.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672137/pfbevgs1soejoclpatep.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672135/hxb52omwqx3shwqontwx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672141/lqtjttdnxfgsd5ykr7hn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672141/zdsh9sknapdaeubr5i5z.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672149/ymr4bdkhdipcmrwfxzvd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672148/ohes8m4xtunyzdbzekvq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672147/dswdbkdiggkuxrmoogaj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672153/qaeps6dlzofojplyrv5x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672153/kunub2vny8swuykdcavk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672161/i0utrgxwzscecpuetns3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672159/itxtjpusqaowtpssada3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672159/fvtb78b28mjdw4kpthi4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672163/omekgbzss3hqbcxjjwod.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672164/shym4b1chh0qmatlvd54.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785672165/aja65zxxhod08wq4epbr.jpg"
    ],
      "32": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686603/wmuujcqgbqjv2r9ukshn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686602/tdsf5vlnfiocyrhvgtnh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686603/affcanzpicgev7fbnhie.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686603/xalbqn56jyrueckqrm6g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686603/i2trti5i5jk9h2ngcfrp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686605/va4ufietgzb93jgsok2b.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686606/si6tbk7euxbdwlkcfell.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686604/v9l8oaf5sw5kkxgdbczf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686604/mnwfe4ybiivxui7hkxo8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686605/sqn2xqt7ofthtvclgczm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686607/vsnlp4vlxag5e0phkv3l.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686607/mjup1uqgnhn9iiyfva8b.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686606/lr3lawwwu1gb3bm2rvjc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686607/ru3npptxqdqxumvtlfxo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686608/hk36mzv4xacpjzp0ejd6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686608/kfu1tkjeb0uivjfrazwq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686609/tdiahfjujewqclbzw9hq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686608/bcpjkuuqis63qjnprbuk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686608/tgalpfczfqxoktp6zikg.jpg"
    ],
    "33": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686610/wdvke3cpt4s7oogezm1w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686610/b3a5ab8kl04r8x6t1mzq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686610/zpgiynipnybd4qehbylx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686613/sunbrwixcqh0po2w9k6r.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686612/z7hrzstczloljs8jlcwc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686612/fgoty95nb0tzkd2i9jsc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686613/siwtcg1cg68rypuidt3d.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686613/nyi072mfteft3pb173uh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686613/cgdgowhtjmssy2az0w5y.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686614/pkvq0ddwjqy3lo6x2tdb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686615/vzkgizumokluqlvyr61a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686615/jmvertmrlf0kqtsmcpgu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686614/zqesjfn0vvwvzprks38e.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686616/w2n3s9y6f1wvqv4pgqdt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686616/jfocl8hptwpu6akliof0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686616/eqav3g0junnpkt4q4pqk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686616/cqgmgiogqev7nm2slxau.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686616/ir5kqbhhyzi3ydeex2ov.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686617/yykhkuymcfzuzhoy0563.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686617/o8qzgw0yaws961uttbba.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686618/us6j4m6xdwngffkxjpvp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686617/y5jzoyf5nmyaaoljysbl.jpg"
    ],
    "34": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686621/nmpp5jb5oxijf20zbjpq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686619/tddt44pkcaw6pihlflgj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686619/acfjt1ekorkdkgvcpogt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686619/s0tmmafvgxoslyze5qqj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686620/bhpjauktsipm9fbofhaj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686621/emhj2dxpb3rpcbr7cik2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686620/bynzn3zxmcb7oipp3tom.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686621/ogyfh3lyvsmmjzdxot4y.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686622/twhfne9w9fiihvgho7zl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686623/mgc18ely64merlsvpu8k.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686622/yamulaymfcukzgzbofly.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686623/xqhbsdqfcbszi7jjdiui.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686623/p3s2hmmddprroqdcxwr7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686625/d5dh4hrhn4jaildkei4n.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686625/izgqp19ru4udenpjgemg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686627/c1h1c1o9toirabvrkmqq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686626/vampsxn05f5nc9ql6f6o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686626/gcvkz5a3imy4pbcsjxa4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686627/ezngfg0ruzgsavywbgbr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686629/rm4oeporjnc60y3cbgwg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686628/v6vrei4tuyjlgrd12brj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686628/s1ss6dgfoaowvellxdhk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686628/kd99vg31mwppvt3n1nwf.jpg"
    ],
    "35": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686631/zunqwztfg31v3yuvxyi7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686631/bfwt8gakikwehc7oo1dm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686632/grxoflkenv9jhhktbsin.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686632/ml1rxkku89n93vl9yrnv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686632/njkpakk242jv5q8l2jdy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686633/rgw4ptsw7ivygpihoisi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686636/uia1h9zgrnfmh2ixqlpz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686633/v6e1djt9k42l2krfgkir.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686634/svywi4gisx0sr7b7wptg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686635/iwd4tsi9gjzxd6grpqwj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686636/ppmf2uuiqsquse2x5wg3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686636/ahpczl9iws8zdqhdyaod.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686637/ksruf0wuwx416xseydnz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686637/hubq7hwrdtl6p1rvsm3c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686638/fnexooywhdev6slczlcr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686642/dfvzwqfcwnl7wqtewbwm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686641/d5ggfkmacg0lbjzu3xlx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686641/f5hoaygtuxywd7a91hf8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686642/oid87wztsyh6dcal5mbc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686643/eluslf7ysseuznkunqvu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686643/vvvubkfml6r6zpjtfwkk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686644/mmt8ngabp1jjgwbpsorm.jpg"
    ],
    "36": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686646/irl5zcfr6bt3nh8fndhi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686645/pjrnibai0shqnmwqf2xl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686646/si45ejf1cpldqecdf19p.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686657/ufarjsag60tbl3ocxtim.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686650/ypfdsjvjmsm0ynoittga.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686649/cxny159zstokp1frrwdy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686648/jvxh5oyrfpzisnamqsur.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686652/fvyinzx8ykasmrmlxmho.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686654/lmod475em4mogeqwud0g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686655/uqebvp6qbmkyjfkhhkbu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686655/bv4iaqigir2joz43oayl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686657/rg9ksouw3laktdln2ybg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686664/vntm45smyi1ytvrdom34.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686662/jbwpc8nrexiori1shxsc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686663/livrwdqadomme5hd9eat.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686664/twzic74eyxhfijiu03ka.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686664/o0pvqqe0uj6kicoacwlj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686666/daecbcd9quabrtiplpas.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686666/cwpsi8g0cxn2gwqcwmv2.jpg"
    ],
    "37": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686667/qsaq3nkmdxtf0wecjmqp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686668/dmf9cyei0ujrdopwyszv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686668/k5j8oxqj4yxplu8cnjy4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686669/sg8hgrda3zxso2y0dklb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686669/xcfqtzmqzpp5pgqxyvon.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686671/rhqyzzykfakkjxgxhhse.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686670/q0gqbvuuurzs8pcpj5gp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686673/qnjv6rurglbepuvr08vl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686671/y6v461gudnvlmapo2mfj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686672/xclouvu9jojechoedjgt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686673/w3klv2kzabqriy7y54cd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686674/fs2xlrb2dos9a4mqtizd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686677/m2ut0o5lhserhchjya2z.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686677/ph74pmmlhykhh6nfl9bv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686677/ugjxyvtg4gdfhuafes30.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686680/uepfdqoefqrmqyzoghj4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686679/cjalg5hfkyyfzo3rkyh1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686679/lluozzf3j4gfsvfubbqb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686679/tohms3azdvecf8kiurje.jpg"
    ],
    "38": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686681/pd4pduzmkcart7b76tr9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686681/yptalv2op8nqo0scxraf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686683/avj7o1gu9ddzmaryqqpr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686684/dn2ew3kfoupowbckqj2i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686684/qoesfnopdigjgxhh2ucu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686685/xqr2tdaaozhxvvfpaiqx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686686/p5fzkq3oln4aegkqdcwi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686685/fxswlmte4yuqkcqlvcwt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686687/amrfc0wzsob1mfs8u6a5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686689/yiwfiknelmglwpva2fyi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686687/gz1ttsnnrl25w3gsbzj1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686688/cd5oav1xzygz22kzftn8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686688/n9bczc1sobjxrl7yi1hb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686689/bxbvfempywtzvkt0rfuh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686690/eqlgk1wmtwudcnpe4ont.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686690/la0r5npxy0o5juygvrjj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686691/rfqychik60lwus8xb8m2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686691/gsvp6orqdzbei98bvzdt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686692/iktvqsi5ptocdrdgk0qd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686693/pucdjwcyycanmktprnx6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686693/rsw6uqkiomdpe2wfcaei.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686693/crcsww841fwehychzser.jpg"
    ],
    "39": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686695/bqse0qujiqf8i5zqmcut.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686694/c6huvpznq76eqjrqr90h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686696/gtj1douyqgmum96az6om.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686695/ysoiktn4e84z4ufxxiec.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686696/jt9lp9bxchuwpcrvqd2f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686698/nayv9kpv94fblc1pzmsz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686697/ikxfmcuiguiwutlm0k42.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686698/g7sau24gbyzzcycpqoph.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686699/wvypauaiftpn6nsrf12v.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686698/czahfik6dgdmn9a1xbf7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686700/ww17mzmcsdmm4otjhpn3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686702/jaqj7dacs0wo5xqmixdb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686700/crd0owbcuzlth1kkxpr1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686702/y5ik1lp1lhctqdezkc3r.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686702/e1qbwhr2gvxfnmaqppa3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686704/nycfqw3b4daehxs5fe4h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686704/knwglo7ylmv4iemcaoll.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686704/rcfjpmhhbhohygmjd7bn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686705/j4fh089gcdvtd9t3z0hv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686706/jucm5qfgeg1iiqbysmbd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686707/osvyur4mwnpwv9l4tzgt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686706/arqt7uwqr0ljm92hhstm.jpg"
    ],
    "40": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686709/lcoze9pxn4cmx3i5brbn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686708/ji8woqhofwrd4ukcxhvi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686710/gc8hbmi7qj3upsoyiyfe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686710/t5ky2lpfw6vxqb727kum.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686710/d7cwlxzhaezy28tzijgf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686711/nv6kwwqunaffvw9hkbfe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686713/d0opbiikpidjhah6jglt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686712/htfvaukcx93antfcpukd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686715/gmbgtawt0sk07tlfu2p5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686713/f969f1pyovypgdxwqdut.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686714/remlyrr8k7onu4qhax3a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686715/udac4jj0zzoiarflyznt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686719/pkxi5zxmnqykrihzawfz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686716/ffuvinrqmpa2opuajxd8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686716/lnzfky8rkfrc9mykhe6h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686721/rzrz2jyg71ot84ctc9pz.jpg"
    ],
    "41": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686725/fohdkvnwkbmnjjosjwaw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686723/rge0qitkbpyczrr4y0ak.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686723/hdrlwfh8whxjmarowxnu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686723/s79xkmkbrqjyatz1v4hg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686725/lbi0fa9nfqlj5twvxhhu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686725/oximpbguoft9ijfg8hs6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686728/bpn0tdemcglpgvi11num.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686728/pwu3gzyx3cjlng2m79lw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686726/gzlklinmunqh7lsuxt9r.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686728/wcf4mdoter0zgmgfg5ih.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686729/acudyq6zmhllvyzzbqmg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686730/blhdhjj8y5aczwgzvq7b.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686731/v9xvoujh1pyoyogzlzdt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686731/huxhawyxxhzht7m7gcte.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686730/y0w6bznhvllokrlevcwb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686732/cejjfgxgyqsrtruxtjpz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686732/ixyw9g6di9tpakxjgxot.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686732/q6gfaigw5scb07lexwep.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686733/dn3kk8adxnlh8j3ixgqh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686733/jsxf0wvsy3lreu21ydh9.jpg"
    ],
    "42": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686735/s0xwhpw3wsyyn3ptcubx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686736/ywn9iretzqeg0nmfzein.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686736/bol1vjtdc3gbbnlafsrh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686737/preuh70lagor7x8iosnj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686737/wzxtcszrmo24ihncmgyd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686739/j5algexkkg9gvsofyjqd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686739/wyw3egt51ygbztfsovtb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686739/vucsiodfpsg8evdcfb0v.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686739/h5gldjql2gimpkonkbxp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686742/kpklu9rq4antvsvyancr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686741/sivyfriqz3hfyjdcjmtb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686742/abgxdxgvipmly2y5gacr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686743/lszozeybbpdzgrkev4ka.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686743/xv88lrsd5e3nsijt51sj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686747/zkgdrqb0o7sbqbnpwm9x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686745/krjysk9hdbwzmnzp80nj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686745/avdgeywq5f2odnjf81qi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686747/wsfrobczfe32v36kzuld.jpg"
    ],
    "43": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686750/tepogj1q1zwf2mlejuly.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686750/nkeosmo8k44ojnjolwdk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686749/ygfq89x4vckdyua8ca3j.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686750/lfygghc8ekmwz66pm3fi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686757/ethsstci5hkussx2tykr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686751/xuyd6c9785blsk6kcnva.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686756/scbc6rowjt9zgp0nsb94.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686753/aeoydeslqfez7wcrcnw0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686756/ilsswrtkkt66a8hfymuc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686756/thnjganaefjewuf4zkjy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686762/mgdphbyu7qczyeaqbz0u.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686761/ysuema5x5hk6yhkgqhom.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686761/mjxbvkngkvw2ldft8wuk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686761/mgtkrpbh4cl8baeniyiw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686763/lwc7juoxsi7tjanbustn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686763/wtuqin74iyed8pi7gnzd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686763/wgderdptubzvjdbhg1nu.jpg"
    ],
    "44": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686766/yunukh3vfqg5iw4qbqac.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686766/pyat3fz148oxbzijz8vv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686771/ynsan0hxvkkqmeoauy2t.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686774/hqh9bbp8jf3jtpwllx7k.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686770/mvgudunktlaokzjizhjs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686770/w7lpzjsyhjraulebsfnc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686773/vg2lfwvuimxd6hunsaib.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686772/q6eajwzwz6n0dipgxsyy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686777/jrooomwmb6buk9fih2b6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686775/tees7vjb6t7p6ws4zdjh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686777/vccmgmh0vlqls4ad3htl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686779/s3wssh9kyifvaxwh2muj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686776/lzcctguz6eobwquxrdak.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686779/wspwoyqs2bkcz7llgitd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686779/r5ebxoncebxg4tg18xuz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686781/iaghberlibjxisrrgzse.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686780/m96wqd7nazff1ut8cxok.jpg"
    ],
    "45": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686784/gc5ghdwwhglzivgnlrkf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686782/ci4rkateutyn3mwt1csg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686783/divm57wcj2ontu8mmjmy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686783/nodui6wnxm29ob8xfidb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686785/zbsmu4kpbwoyvm1pcdut.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686786/siyw92ifz0fgozcx4pmm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686789/bppmcg1hxhvvesgdhxad.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686786/tb6q12lsczqmfdbznjne.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686787/cht0bqzus17z2ozmsesm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686790/okhagm4wkjs1zay6xu5x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686788/vqe6iugwlpw6dkssbilo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686789/v8r5av9mg7nezs0zwonb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686790/jhhgji4f0tag6u2z0nmn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686792/s2tjyzl1ruypqvgsvktg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686791/rmn2uyxqgsxz3aogquqc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686793/i3js0ujjruitctt7qlki.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686792/aq9jrqaj4k7fysygod3k.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686794/pm6jyd4bl0asfioorui7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686793/zveommeh8ijsistjg45h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686796/pjdizxwz0qwcuzwm7dck.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686796/c3vteczqse3vfx2eg5xy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686795/wyzenhfdd7v1wi6ufd1p.jpg"
    ],
    "46": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686798/idppmnboankgbjqkdnvw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686798/eoufv2egzazxsqrxwgml.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686798/bycuy4u7hanhgykc5p8j.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686798/ja0btwtiucno3dg3kukf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686799/px3tm3vdzeucvtpypqgb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686801/myf5xh9dbpwi2iusfbys.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686801/vhmi0tzhqdmakmrjh4te.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686800/kipxofqcybwko58nlc8s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686801/zwwkyzlnbucknlwn5h4h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686801/mgxyujqlp14ztxlv18oh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686805/w2yfcdpfusknygw9bps8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686803/mhgkbvo0q9txe5ugo72h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686803/batxohdjyc1ex1hxx6wa.jpg"
    ],
    "47": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686806/nsfrs8srzssnujd632fc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686805/reibl3dmebbhfuitrksy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686806/mjzpzhdqwekzhuv2dufg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686807/v42cgaiu6watnih88ycm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686806/euifml0dliqbcct1lkp4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686808/y6grdzjcgzgrczug4ita.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686809/ns1vv8h3ksoexfv7omg5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686808/kg6rdlucdotvm9lsmtac.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686809/r2nugaypre3li5fxgjoe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686812/rlrfv6nescpmg0zus4na.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686810/nez0i0qxgqx71lhla34j.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686813/akeksshzn6tqabylqrpd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686813/vaqvxj9qfktkgecyx0oq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686816/r5kdjhfi6q3wmmqv1fje.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686816/nbzy1rc0jpk8vm0bxy2s.jpg"
    ],
    "48": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686818/yxy6lqt8ww4rtthcs63o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686818/vpgqctxqtoqqk1799yux.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686820/aln8ckhgtlcttan6nuew.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686819/tllkavk02lsfnhpkyxbo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686820/imhcybjply5zvytz1lnk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686824/hz4i5w96xkvu1ffrye1f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686821/xtvywpi7rkcxilm5cixn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686823/ksdgi2mn5wewlmvxz8ay.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686823/qrdlfdzpmpog5bb7lwcc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686826/qc8rjsvdhr1bu9heaoxf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686825/ye6a7kanpiesubzjm3hf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686829/nsiisrh9yxfpxdemogsn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686830/ucxufe1k8qonkp8w7v5s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686828/kuneogpeofksiur1iilr.jpg"
    ],
    "49": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686833/wdwas2pchh2wtjlwktz9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686833/gxi78j0crbbcoo1jl7in.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686834/hcdqc4lr1bxfiushsq15.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686835/f9wskegxkmiopls6xrg5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686837/csc8aotkgxpjpfdgetu2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686837/khmicfq2rv81z82rfl0i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686836/zyyndjppxzm9bnzjzepr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686839/jc880vdn3wd6bjrwlx7u.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686838/vg42ckjkbixztw8w81ex.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686839/spc29bjzmxmwf1m0ldh2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686840/kj4jotmqbigyatlsrfoa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686840/vgld1j7ddwyctpifrqwk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686841/r6uwao4erugfwnuuuxvm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686843/jfuewnbtfeyuy1yxrbvw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686843/f7jojlka4zlibua2hb56.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686842/nap4h1t07h2l337pb4c4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686843/ecd23btwjhi8x3xtbqzd.jpg"
    ],
    "50": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686844/b5qdcjmxxc0kfbyeomsh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686846/phbunqwbqga3hfqro7by.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686849/yiltyycclkyci40vpm4o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686847/m6lyjzloqggzr7alipra.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686851/jezhidcyic927wmwfp4n.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686850/hwasdg4urzwbswe23kyd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686853/auq5xn4qftalpe5pkjga.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686851/cz9ef4sq0mklxno6fu85.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686852/easiyrxetevsjadp0t9l.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686854/b40vqwpspqpyeqozly1q.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686854/utzwus7gnnb0uipepczl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686856/wk9uic4e1fj3xffsamse.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686860/gabaagb95llkn31oajv4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686858/h9ttop0tnplszroamtlo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686857/xjkiuzmivt9k2hsljwkt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686859/ur4xmrggtdqzwhnae9nr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686860/rv1j9mzfvmwbvcqwyxmt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686861/spek8wt10hkcxhx29wzc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686861/xfbdgdzphkz75zhmhpia.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686862/x7xal3ae8nprpkqgzgos.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686866/acq8p0ch72ryejs6pmac.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686863/jeuwp5cj14q4tyimdhoz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686864/jgjrjwcqh4z7dtswi51p.jpg"
    ],
    "51": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686870/bphojrvzol3up3xhf9hh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686870/vmvwjkodgs5ao1mj2abf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686870/btpccrhfsu4wv7flnbhg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686870/ztf13iag08g5fafsr9tm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686873/gdzmvz8pdllmlou774u2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686872/gkil17qjstxarvk8lva8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686872/fmckpxg6il7msp77pujz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686872/gpxc44e7f2qza667bhsy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686874/ycjkf29vwwji14xzvc2g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686875/ofk5d7kint2fbjxoglzh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686874/cxv6yctdbt8z1gh4b0sb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686875/o979sc43xdmxvhbordpz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686875/ew6li0qmshzyvllpepvm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686878/sdfhalkkdvpji3c2cfr1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686877/ygqlqoxnczqqqpyh2pct.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686877/xemdepaji4qwy3xaokpc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686878/sgagxm89zvo1lrkborn4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686877/ajcm6tscdvj9zo5xhlfe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686879/sfgyvn83tkiysltykmxr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686879/iwvsro66pyietvqrwlwa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686880/noiucle6gqyxbonwlecw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686880/sycuczkjjalaupfeq6o4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686880/pqplrcii2punyrnwpjr0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686882/t8bvzlpyngljbuf4bg3h.jpg"
    ],
    "52": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686884/rjhf7ix5jped248qcczg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686883/xzsiubainmpvdycwjmn7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686885/u7xbcydvgiriwlfavr5m.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686886/gnesxeh06oxsej0ca05w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686893/cxfcb5wlxvfvoxlk5z4w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686886/gwta3kwsqjfgkd92ubhh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686895/rpwitp6ryrr5gxkxd0ex.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686915/qomd8sxrdz3cfuhjz3mn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686889/z3qlo2ppisoewvndplxb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686894/gccty7rd5qbgrjvspwnp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686904/iqz3d9y6mzs8oql3zglt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686904/kdbv9yhnwz3uzy0d29r6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686900/f3ohy1egy6dtrfeld36y.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686905/nrbctogjawmsaq7rtcw1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686908/emqmwtm4lnuyred2e416.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686908/vmslkqgxjwwy76ig4wrs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686907/hgianuwuk8ohcloynyfb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686910/gr7byas6zerdauwhh0hd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686912/cdu9j73fztn9j1snik8z.jpg"
    ],
    "53": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686936/wlgzsjztq18lzzmqycih.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686935/yc3cjggs8drughsdl2pr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686934/xlu2usmj09q98pinvnqd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686935/f3mtwceudqwkssuqmfsb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686935/gwont7vr7k7ia1bxigff.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686936/rcjbifu5dew9ko1jyqbj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686936/dlsqcedqxxd7xmyr1csa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686937/jd5pmn4eivpqsnrehjvg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686936/tvm34yywjyzcid4whut7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686936/a5njldjszgy0v5gk735f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686937/ip8deerg5gaxpqeltroz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686937/aaxpcpmzmcicapz4cdzd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686938/dhng1i3zc1tl1rrltrbp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686938/hfx3rxsdpgrhqv406pqu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686938/tmcj13hvsjixesferaxy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686938/b4mwjs4pyf6trhotk7bf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686939/qvontnrnngfr2emlb8gc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686939/ndohlwjhvvmmwkyqrdxf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686940/yqtcb2m5aixn5bm3dy1h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686939/md3msyhsfynid1a04wun.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686940/kteomopiiuykgdyk8tmg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686940/ng3tzwswvjrd1jvtthnw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686941/v86pywoya5svp3yhcldh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686941/qwcqxnurs9b5tmmcvkfz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686941/sfiejl4g8x9knb7nhe0f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686941/u9mm7s77kmapd0yo3by0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686942/qjyrdyldbg70h4di8nl8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686942/ach0yjl7tp8vhujuavhw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686942/kv3fm93doorcqiuzl0te.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686942/nyhfyzvixkrfo5o3ofkq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686943/jywjpexipqdohxblkduf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686943/ffzdqkh4ijjuzwcquwni.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686943/r1ctmopz83ggy5nm1pgl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686946/mqdvvkbjrzn2vdrhmbmx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686944/lmmqvmmmhwtr6mayhc6r.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686944/fgr5ub7de113wygkkorn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686945/gqlvzkmr5ong4oldlf8j.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686945/l65vdgiql7gdqeqxates.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686946/gt7mjo7u5rzssj0ai9qu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686946/o1rag7f045k03cwx29et.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686946/rpbbsmykujvdjdadmvf5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686947/kyqjdn6u494d7dxtmrio.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686947/b2nqwmczalipvayrffdd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686947/ke2hcmrsytw9a1qana4x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686948/lo0ojs3u9uhlmbkss1ds.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686947/prz1nzjliubtox9jkcpj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686948/onql0obp9msyrwnm6pq9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686948/mthg8r4rnempsemjj3ak.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686948/mu0gbibueouse0tspna7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686948/lwnt8p7bqgru6e026yyi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686949/lpterfpgepafmcsx66pa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686949/jtm9jwmkielqikmhkijm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686949/wxwupvbewr4owvktixxd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686949/w7ptpn3snppvhcwuen54.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686950/pxyj4nvstyvdqc6dbwkx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686950/philn8brtofbie9d1swn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686950/smyi2h3bwfkcwmjwp9db.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686950/epa48ticmkkqzpsbrudw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686950/mouyaqr3a2kj0e0rmulh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686951/owgdugy7fmwloqn4cpdd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686951/fc1uyrgky8swgx6zncjp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686951/bgyprxfmose21ad966zj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686951/pcqqxdfopcrg0uecn8ur.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686952/pnvhy1p832ho504tycnb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686952/stsa2loxydecaw75sbcu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686952/kabam0b7ycgw9nlxn4n0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686952/grwwp1i5wkr1bceoyorz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686953/neig0dwzpeeze4sjzlvj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686954/epes7rxsvetcpwdpkwvk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686953/ozgf5igibpbxr7rymmnl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686953/vk3bpj9amqztslme8axg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686954/piupqgs6robguogwskhj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686954/ugmqsy85jwua5foui4ga.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686954/id2bzftxyjrb3ms12iz7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686954/ynrwrbwderhclsaosrfw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686955/einnwbzkyklcfq4pgaib.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686955/uayocbgxmr8nngjdrszd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686956/u9zcihidpgaeifchamx4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686956/tqswom3e95w4rrprid4n.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686956/ceh9jeuvb2ve6os0sdv6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686956/u5jmtxyus33bsebwmcyd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686956/or4mdcsj99gm7c5pswen.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686957/riwzxwgbirnsw6oc6psu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686957/z6ehaec9ntczmihunrkb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686957/tqzynhzsjfhrvgcr6ayt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686957/a6bvwqsd4fdke3eokfhl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686957/c3nqcblhdhwgi5lq2n8g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686958/d6jogkjvzsetcbuc354c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686958/weq28pluaw9yqon1qllv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686958/axmb4lkvqcoxb4afmkxi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686960/qagpmcrtrnubgjcefv0h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686959/dbxlpwqdavolvi3sfog2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686959/pzmyg9dtehq3kqraczpm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686959/rdt6g5cc17aodrym8zx3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686959/qitb3nuqobw9yuoxepi9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686959/luc0zhwza9e8sjliids3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686960/yv6ytj92zanfomhss7xx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686960/zf6ct2psbvsxqvsxdgnk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686961/u6eava6yh1go7jf6fiw1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686960/uhbyw039u6mbythdff30.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686961/pnx7f5gpq8f2tpcynt0c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686961/duiuwkzpwv1jkyhet8um.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686961/ebqmwhg45cjqbbxwjcng.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686962/tsk6vydnhicz9memijki.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686964/u4e4kcm41gec0phwphs0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686962/vwdbmxglfdviy4osuyct.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686963/co9hr3bjx8onnrc6rnjh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686963/p8c3zdvdmqsogpx2r66j.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686963/swdct8z0l1gpvihncmlh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686965/gnwqxexujh9xlxpoytrd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686964/pzgsd70uh6t58btvqpkj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686965/qnacurhzuiorfar2u68p.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686966/qngty2lcqnb0u6qncvbx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686965/jjf5jcvbyflz43lszabf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686969/vvm3x0hwwnnkiyeis9gj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686966/iui9lgakxdfsbj7nmoqu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686966/x3kak0sowtjxch8hsrhh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686968/lkhdeozfwvlmdmk3xubx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686967/vnr8b4yprlnvoqzntwro.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686967/d97tesr4hide6q0hmqza.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686968/axd8p1havvpoyyabov6w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686968/wof0uj40ru5mtem1zfrg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686969/eywfwgpurzxuhcj0rabt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686969/toip92xb6nesg88k8llm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686969/knwcujn59hrgp0yb2zci.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686969/yoo50yn45ufteq6bh9rk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686970/pvq8zwfqzmnanjucrlef.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686970/q7tm6vtwgvjsyuachizh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686970/imhdn4osmxdarwvq80je.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686970/qb1ftvy24nmuhyxdxfpa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686970/ciab3lmafnbafxkak3iw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686971/kt8bblxzfvkbsrgxbgnx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686971/pcyqohphhtdzd6ch2cku.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686971/qkex3yhpqfx0iqra1ad7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686972/smmlizztzg0osgayvili.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686972/farugx94drs31m8b6n0h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686972/qgqsbliidyilqdwym9oi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686972/saeolyba3u4wkkli1xak.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686972/vzah14jhkml8xrwgwlzm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686973/fsgo80hycra25hs5ivyc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686973/r5nehykksgomaaasiall.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686973/mwimbf1zlelelio9zacf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686974/mqgu8bjlxlnk96yoyfds.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686974/w1rq2yqgdjbajq7pjcta.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686974/wfrlknle9m4vrapq80at.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686974/woo7cdxgpvskipi7tvqr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686975/r6g71ml32aehjdsvqz0e.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686976/wgvmw5xqzmj2qhzgy9c1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686976/zcskjq3cvusfucq6gtm5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686976/luow8ok2vfbowoqc29qw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686976/q8rqf2xt3blxjbcupr93.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686976/odst5nsdcejahuzbca6w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686976/neqznyk7gghcqn2haqhc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686977/wv3o7z1ocld67uekxdon.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686977/g7qfbyil0flwew4m3rnd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686977/jtfd0q5l3otqssdhogv7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686977/byvmt4yco7s7v9gocg7i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686977/zs6sqnxn7pfdf9avu7fv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686977/lfwkj9zfagtesdzhzmy6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686978/bdvzpmodqiyijaq11o89.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686979/q1iofekuqruie6igzruj.jpg"
    ],
    "54": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687026/geb8wqyxudx6nlksgvnr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687026/zgag1ikn3qv58lzhepx6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687026/h57u707wasga0pztayni.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687026/ioe20n3b7kbxpz0vx6oy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687026/wffxdwkrvw4yycikw0eh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687027/pg2lnf8ygzy9y7jzofxn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687027/xzsthzektsotifo9oya0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687027/cvhfm08xhz3utj4mvwm5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687027/miuvkxbg5ap03nweduee.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687027/s929sw59scaywr7umznw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687028/rkcgdnb2cr7dlkfmpvlq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687030/d4zhhcp9izze0ef8cw9n.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687028/shcznt5tygtac0j4gs9e.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687029/kc2kuvk36ejchglhxcn5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687029/kem5nviubk41gwffnnbd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687030/wfatllkkjpz4rfqbhlma.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687030/jhyyfbex8cadvqk6u4aq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687030/naw7lxfk3vzkeireavhl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687030/dysf0vrn28faeirftghg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687031/uflncmhhqxd1vcqdkwsf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687033/bmfbgnody0kjkktnldpu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687031/ijssjfgfvmmm0yfjmt0o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687032/rmkipmqfrnyufbsvosnj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687032/ewgyjncaqqi0larsj7hy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687032/kwjghvnzg8bfeeh6t1ad.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687035/z2uwsiiclwldnr4ijsr1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687034/x7gj4hmp0ebqt5uqie50.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687036/f3gs76njck9xanouueaj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687035/cypq2ht0gid43dbmeedz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687035/kxkrnzhp5mdwbngga8mr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687036/hleqtbpyfbz6lxb4tdxi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687036/lognpfqr6fwfkd7jckb3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687037/g7rrr7qvn1fxflbtbv7d.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687037/tquxbvolef9eipreipqw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687040/efubmfrskyp3k8iw36fp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687039/anl5ojtkyukszy9nxeaz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687038/gjopqx80comohpr8wltg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687038/vsabdaykdlmv5bl7hdxt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687040/kumnb88snhftyyfvnjk8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687039/czwmkznwzxk5kgpcty29.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687041/k44lj1e2ihk7qbostiys.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687040/wtdlbnjaau5nifbupgyu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687041/aji2e4egpsbom8ewumhz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687041/swq7mskmfvdcb55ssbm1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687042/jwgzajychbi3kjhwkwpg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687042/iqmc1psar3xynebpjaut.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687044/lvlpg3txjcbfe5wnidlf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687043/m27jno0likf1owbmbtox.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687042/pawsbv0j9kyjcwioqgyp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687043/pxyqujecaiinlmerq2cu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687043/m9wtrnapezk00waxusnn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687044/qeonjp2npoypyymgxz4w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687044/jirg8mzfpunv6ikfxjws.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687044/i470qypcn54biinm5ev4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687045/kbazxauy0t8qt1io6q1u.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687045/dgmoa70ufdcfjrdjhfbw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687045/r55zniyrxnj0ed95jfei.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687045/fixxfu8umyxxaf4rmkxp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687047/hdsbpw00ll9zekdgjifk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687046/ilp5fcqjdd33skzbenoq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687046/frrinnxbezvgoecpd4jt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687046/uyoookbajble9vuevvgc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687046/gkglra9f31b4bvi0mzuu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687047/xj3obl1ydjmqoujgqu1c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687047/zvctcta59l0q8ypvi3jf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687047/zyukznikhewaluvdxnfw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687047/dclj5miw3os6id4le9pu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687048/fwhcp3xl24xjmglbioz1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687048/wmvms3qf1naryxjc9scw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687048/m7iirgwgqcmbmle9guws.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687049/hwvbg3b8ftpqelmtaf1x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687048/ozkaetabsibqw551ymbw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687049/ylfeiin01lowqpthot4g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687049/cjtpr8qoksrqhaojzre9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687049/c1gvsqujmrkpfkcjezwe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687050/kw3tohp4fzyjq60ewl9c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687051/gjnkmi0lcg1kbrcyrbuo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687051/hrviutbkxbqaj1qrdgd4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687051/ocvybdelqobmcuezqjwj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687051/wcczquboho6pyqq2pyfl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687051/zy3qgq3qlqjqfxyklxmy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687052/mqrcoki8jykachzffln3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687053/ffmik2olvrichbbwj14s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687052/sy9dvxz2in9gzmxqi2o1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687052/d3m0hstuvkkarvbrfz4s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687053/oxevhk1s4cdouczu1ztq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687053/gqs8natbt6bphwln8x7i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687053/jyuhpibixyoqwbw0o7ox.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687053/wkpdxrbk3qxaomwsxqci.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687054/eohzlaaciw9ypwrt4i5y.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687054/ezeohs8i9b48pwygff8h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687054/cuyrpbajusvvz9ofna8r.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687054/ckpvcbgt38epbcu8olwy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687055/dbpczilvl9zy00ujvqut.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687055/hgul4xprdx2ixfjafuis.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687055/wgbhpbvg1oc3u9hw8yuz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687055/vxubojgyrecruniintct.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687055/zsjxynluch0cxfn7dmvk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687056/bny2daxcqxqjmt17mgz5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687056/ioucqwpiy0ducmhweht8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687056/krxhokwgnqo43refnpf5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687056/hcjg8m3g7pwcjhaprffd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687058/v5gjnycv9umx2fp0ix3o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687057/fumyxpnkx16rt5pnoxis.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687058/wj9sbiyuhknsmnudsi9u.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687058/f66kb79rgcb9zxeaxlfa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687058/bueay0djtdyisxsztgrp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687059/ppkypdhaehnjmwta5qmo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687059/qcbywiao6iiymdvrjq3x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687059/pdfihpcwvi7vqtixjto6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687059/uspdr62ygnhge3yja0hs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687059/o5ljjwq3h8mflxrisms3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687060/ovldcgcnirrmaozdn7jl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687062/cizhd6pk4ufbof2k0rdp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687062/z3vqn8u8unch9yuaez0u.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687061/wjmhflkbje5fvdy20kss.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687061/rwmtohxuxt2zcufocapk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687061/dhlxdw3pd8znw26ommxg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687062/ctgukmpsxzhygdfzjuu5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687063/mpy029jjroa8j97h6ipw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687063/sovq1weetcvjxgw0ifq4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687063/hoyhdvs568bbc45kcj2w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687064/dow3vz2mf4sygpsma1lv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687063/k36lxl0wdwmnmwnfzri0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687064/badtwbk7rihtrovz4qva.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687064/uljzfcafao5zkv5gktky.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687064/pjdnauhfhnqrqoxzts25.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687064/xfy1rizi8kmu34iap430.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687066/oz3hz0fckt63p7ytzwmg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687065/zsteetcnhq62vcxuwoyz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687065/wztnt2g9wot9o0kiukuc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687066/hpbxtjlccubudju7nkg7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687070/uzpuzqdrsqdujfqje1rz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687066/ow2p5exoucq9o3lzdzwk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687068/kiy9jumndsk5zh3q36ls.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687069/h57z3mkvgeioisb26btt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687067/zrebdld56zjab3kr6fue.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687068/hm40s8yr9f6s0fqnbqnf.jpg"
    ],
    "55": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687112/kdie8csrqhshj2hgjv6y.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687112/vypjsqishzplpukjkawd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687112/wckvktly7xxlqqkpjmqt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687112/klqgoglv7c3g5nj7xip5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687112/zfdcihr6zthj9oosxomx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687113/pmcfrebamugskbex2ox4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687113/rp9v8ziag9adytylp5jm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687113/sostwoxajhecbkmgi10c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687113/cl7p6ya17iuz0w0jnspw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687114/drnzvwcqjlfjwflqbguc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687114/l0zda9xkakhs2h41wv57.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687114/gdukzxvnsj9xwhkkmz5o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687114/tsw0lgndr8qfwo2afwjn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687114/usuvbozrdsh3u67odgob.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687115/tcnpua4g9gupyb0pv7qv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687115/dnwxhjsvghkj59utereg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687115/eoc8ddblaojjm2ntlzod.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687115/dbl9cy8bngbfmditq96u.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687115/ftisawcb08u0nu6khic5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687115/fadd5g4jlsqlbbdhq94e.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687116/l7c4ysldjfhrhxprwugx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687116/c3zcwdfzbrdacmx53hvu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687116/jwoftb4bv0rptze4n6p7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687117/r75epsu7nor85hpbdghu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687117/qdo1gru01mbw0l07oaml.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687117/vwd0zgm2gieaqughgbgz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687117/whkbmrgml77l2m8hn817.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687118/ibdcvohjtcyvq0qud6tv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687118/nt8bmeluleabkaerpqka.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687120/e3m2zq6ogim0amuw3bl0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687119/loo5m4okmynfp4n7op5n.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687120/bh31sxjaiaohhfqkqbkm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687121/hxsibrblsuewuhqjrosg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687121/bppq9gghfi3mzwelqmtp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687121/tuvyeeo7tyohkcqnxfvy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687121/qawdt2hnebc3almgihq1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687122/oqa9x95ikx5sobirsr5l.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687122/xycf1sq0tt1t1qnwqb1l.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687122/jdyuzitte8gi6kpyvv1i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687122/ebfiiwypixvtg3ifgprz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687123/eenwow12x0vbqwi84qsb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687124/t5zzbiug4ej9ppukey9z.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687123/tqdclb3rinwor6bx9pxe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687123/kmrt8uyshyqc6neyubpt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687124/f404m4b4ylmqlnojho9d.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687124/fsvfzl2vn6oogxnng8ib.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687124/okucffzyxi2ij8e5exb6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687127/bnl2suyvprvxoysx2cvr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687125/qiyahsgbugdrz0lzikvs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687125/ogbxdyjtjhwmsjldy1ac.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687126/f3l9elmzavbebzi4jyzm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687126/byofxagmkskjxnjdc7yg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687126/ocyxgq5ep1gvjwwbhgcq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687126/doufygcmjz0dugyvckt5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687127/akyql1oo4xqmxqsgf1vx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687128/k1qyzhh0f5irkbqsnnay.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687128/o5jmf9df50ztaruknmg8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687128/n8vxovljfmvdhfldybci.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687129/bcytdgk4cnf7unqlygwq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687129/sfy8iww9sbaoubzgajhs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687129/uglmy0adxkhmqymgramz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687129/wzt2p6buwnph89bkwlho.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687130/klvougputa4jmce0mbvf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687130/g293kx0xwv3ir3rnhpoo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687130/nzlxv4lzzmf4hmorudxo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687130/klvyckqso4a9j8owyyu4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687130/h3lhbvog3s75xufghyqh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687130/auvtxyiyax4455kngftv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687131/dr7ggannxu9hwnd6qc5i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687131/mrkrqe7skpimviqrrfwv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687131/rirfdtcfmmvmplfppi57.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687131/j1xm2crvrgrohhoo71f3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687131/ms2raso9b9wspcffgcm1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687132/j1e3tjemgqrj3ylifh2y.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687132/dza4rrrdoc5cp6kcp16v.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687133/oi6wdokf3lexay328vfv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687137/vy5bgcdsbeeihmy68llw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687133/i48tr3xgfvhgr6cyznhr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687133/jhavnjtn057wjytrhub1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687134/vce0xwae0btdadfpzmsw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687134/zjjgialalizl5lkogyaw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687134/mxexyutk31dxnkp3cosn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687135/cf1uc5znfasmfi8i3w6n.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687135/djp8cmbd8azgcptnucno.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687135/dxsxenpeiadloilbrw4p.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687135/p9qbhlucn4hy3xxhwhoc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687135/qgmnycaoga0ynjgdmmkk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687136/qltbii2ichew0uxnxyij.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687136/qi671oisc1ocdmzydvxs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687136/ijrnlwtu2lnvih2qnlhv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687137/f78wk7xrvvynr2ajua0x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687137/czhnsyjzfmwfrclab44v.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687137/sjv38x7isis2w9jzj7oi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687139/mh3cnzsj5qwcm8nf7ikq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687139/nfrasgo21buhiqwszqub.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687138/gga2miywtzgisnpsxppw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687138/tutqnxleifgnlrqp2gbm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687139/lo1avzegooh824kl2sbx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687140/kqxbw030wxvbmo1gwjdy.jpg"
    ],
    "52.1": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686918/xzmikxfkyoeyxqxj0ztk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686916/ghodmkqcxlfmcbjxzsdt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686919/q3nw4qjk1i69xrrmxf7a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686919/ejcvgiseawamtyormh1s.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686920/p0sdmkdbvbk8pheie5of.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686924/wblvrmrfx2zwv744beua.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686925/aulgcvfmbij1m9i2ulj1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686922/hka4dtiugpvdc5vj63h6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686923/dm2staxonogo75bs9sxo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686924/wl2hazlsqqgxqo0vmdc4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686927/qeznzdtiiwojjozyods6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686926/urorevs4wvu2ub29luiy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686930/altgzqarhqpnjlunjua3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686933/gszddigldbkubwm6rspg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686927/ortwro1yss00vhyphboa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686932/js1m5xrjmzpypnkvym0i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686929/zo3m4ppkncfexz7x0lzj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686931/acootsymslmgyzn7n5tx.jpg"
    ],
    "53.1": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686981/qafpvcz9l4izkgq9cidy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686980/myus1qkpwcezkn7vhfnh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686980/pb55lbhpixje2qky42pv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686980/pr9z0tder7r9biuzofs3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686981/vamfxym37g9pxduyyh5i.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686981/bud2ovhunb22tm4nnneo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686981/c4w0fawuf4hmyinqynfv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686982/enkrfl9y0pbdok360hf8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686982/zutlkg9okf0zcwdsvpbh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686982/ghnzpn2ylctk0qtu7mqi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686982/r30ybufrpizqv5cclvse.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686983/owovdub6yd2xxpmdx9ns.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686983/psd5lycghjjrfqd0qrvt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686983/sawtsicu6ghjdptfvde0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686983/aehft19ipkfbkqt2x7ms.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686983/uviwt6zsimckufycpgiq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686984/vi7mhyzcuwxhlxf9ttii.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686983/iv85bxk4mtrtr3bnjyia.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686984/nmdlwymlfarfv1dr5z7m.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686984/ta0mkvvbzaoww9byvdrj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686985/mhi8bbpteu3ielf7ui9h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686984/qfactyjq4ypqddq3a61z.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686985/jle421nkeepvqsz99nqe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686985/hcohnmd3vojgcioilgne.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686985/c0kaow3yhirrbxuqddba.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686985/upjeggo2dxd3xkvanzst.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686986/ysym35cthery5a7ots9q.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686987/rrzs905h5tdjlossowix.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686986/qwcnr5oz9uttsnvhlcis.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686987/n79m2gcntjdxzcfa1ar6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686988/udlkgniptviip7f8rool.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686987/yuxxryc70w4aw0xtqb7r.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686987/yovb0xzvy4vcqhq6lbqa.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686988/xguvxfqx05pn91scpxw6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686988/n2swmw6jtjlufxvzf7vk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686988/wn1pqd9pwlrog0o4f2ro.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686989/vmpt6m3otltm0omypdqr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686989/qxexeg0orjr3htc3dogs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686989/bawbjufvpagfntvrtphb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686989/oggt4arwfslmqaehcam6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686991/kbckl9dhjdhvailwj8dd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686990/xxppgzci1wptfwdtm6gn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686990/se916ojfsjvhqsbo5srr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686990/i3lydcbncmqssflvdhyf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686993/dgql1px26p4sbujowvwj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686993/bg0hnbaaeatnvn65hnmo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686991/orkts76qirydof2ostns.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686992/qle9swek9po1jszpzsuk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686994/myohrzpfssb8kfsarnbd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686994/mrurufajbmeqy2tns3x3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686994/bhc1lhlzxsm65vyixnxf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686997/ieb2czna0z5x4ubbcthw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686995/wiyiya58i05ptilfdmpl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686995/b8dgsj3ajdw7ax6huafw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686995/nu0tcmbq0asdwbbv5fx6.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686996/ihuagzzgunu523w5juhe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686996/glkn5rn60xgs5tuyqifv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686996/kj4m13xhltupy0ii5wj3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686997/zgsokqrkjvmjqte6r1rh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686997/ir4h7em6k8lbrbtjz15v.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686997/dixjdspq4zugi1ihoh4z.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687000/cjjmvzf0rgc0vidanezi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686998/ubtjvhqxfyaobftinsmr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686999/csukmoit25xjd5vvfdms.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686998/exevlhgyo5nbyxmaxyoc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687000/i4xabiuvkmvquhr8nkri.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785686999/extjyflhneecilmpiedp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687000/vtuiooavv3yor35fe2i3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687000/wlorfriiifro6rxpiyqs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687001/i5c0ebamftn32dhrg35o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687001/fp6nssbytmjhzomvbpvh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687001/en5gxcscgjhmeqegizvl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687001/a9xhwq190ewwul14nxe4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687002/uwgmecnntmc8rrwufy3p.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687002/oocao7ykqr7vg2dgacvc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687002/amyowri0g1rfqwm7icrd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687002/sbuwkfzwqkbgtvtgiotv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687003/bn8ii0anpvfapjmczkba.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687003/e6pokcfpoaa3wdvbkcpq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687003/gr6ffdbriprhdcxzikfv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687004/uwkkftgfg6j5q2xoj14v.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687004/ybyk63gtv39vtggxwufc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687004/kfrdlxg2cqzoc449dgmh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687004/ll8nnept7vamoxf89qye.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687004/dee8brg3jjb1pz3ci6f0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687004/mcc4hfj9axt01r80ophc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687005/k39abam5ml2mwrz812qz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687005/o1la7ae2sqbukuwhv2k4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687006/tgndd5bysu2mmpqu2jrw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687006/pmglrsqfu0umaec43rcj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687006/kj4iwktubzobqiu5eyew.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687006/cwkyggwdbkewvijjz9mt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687007/mkfpvqxmadcfjzdfi9i9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687007/ppqfeckscrff9uqknco0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687007/wenkkmbqyfdiwkauifm7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687007/jorosyhazjudgwt0awcj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687008/kxdo4ct9dsfxkl4wmmig.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687008/slsffcwkckm9mvah547w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687008/cvctdvf8jsf045mjofh2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687008/wpi0ev68s5ytdoiwzvvq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687008/cblhzdmibn0gvauoggqr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687009/kttz1ojqgrwezstiztwt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687009/bgkrblg3ufsz124z8ayy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687009/t81jcovmdy2bqhjhrqyz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687010/qmggtay9oeyvraim1zlk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687010/rqzyxhjrv0s299bt1fhe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687010/ppjkniiyhikx8jnk5dg1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687010/odubrgkngrg2yo2alkgk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687010/kt2kylqxecvqz4yyajug.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687012/weqfojtlyohf4tfwdjcd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687014/poexc2wiepv6gwdk3emf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687011/uwcrhu9yyxoxyos4mwsd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687012/hr3k6yms14pr4czoveed.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687012/d3yljakqgcnikwd4hveg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687012/qaaxqmoydjkpf52aklrp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687013/fmmtquukorlnmid0uvml.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687014/muhirx7xlykdsf0ryopu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687016/sf6liqscayoaxnk2tyjm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687014/epfakypud3ajowxt9uvf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687014/gzqi30t2qhoq4wzcccva.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687015/rluddasdo21qtokmeecd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687015/pufsytctltnh92ex83pe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687015/nkjcnce6yectrctopxtd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687016/awxe95i6njix1blmvq39.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687016/sidjoeuexfoho1seuyr4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687016/h7fxuerfocqbg5qneexs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687017/fht7fsulsmaijh3ouwix.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687017/gh7mmlajvu5cquivibsf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687017/wnsogm4s4hz8lqkgfm7f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687018/krueyvch5hpxrvv3ib9f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687018/hnjqo81w47h78gjxqroe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687018/qwvwhc1o4ov6yd7trkmy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687018/fvifnowcpadqvmunza9w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687019/in0ua3ofyozezbb8o1t4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687019/fljwq0usfba1swdho523.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687019/hzlhtly2sopltjjw80pn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687019/irpuakazr2qemdamtps3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687019/hfrdbrgfwt3tajncyxaj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687020/kkhbvzsszgo9dmwd9mfv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687020/gmqbxmh1art0l8gg81pw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687020/zk99sqleb0ymu0arwffp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687020/r3hhjs4ru6kwtkbo7wy3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687020/xlybhekmbzsa8b4sgbr7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687021/ryxcashkpu86whbudwjj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687021/saymwkibptvyxrjeuowk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687021/vndkeijvntdbqx79syeu.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687021/j7r4usvzpx7hblcv66ta.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687021/lhkb1pimogbmaz7oaq8c.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687022/p8033gfg0zzyizrflhjc.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687022/ikanhjblnf18xdzl8lik.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687022/fykrvp1twn0xshquwte5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687022/zysjskdetni4cd8al7ue.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687022/c7i4mwmsmf4jdupoxbot.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687023/rdps27vtpeehwvygd3px.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687023/rqrfxjsxynfjxlioxll9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687023/kirtwmipihhlognjacqb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687023/pvk5fr0vlqc79gnsuexp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687024/poterr91xoadqe6pwflz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687024/c0uu9bawczrroshfdf9e.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687024/vp6xdpsevxd4jzs7kiv7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687025/m9spbsvhp2v8sagwyco0.jpg"
    ],
    "54.1": [
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687074/bvamo4ldvdi5ieor2xyh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687072/dahpdf9bcdytebrmalyy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687071/ihexlzbafvjotwpzhizt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687072/ra7kr6yq60nj6kpvuqnp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687072/ocp7wi7fn30hvwma2aik.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687073/hqitqi6ys1izlywxf2zw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687073/zwrx8i3nzewjakcstk5f.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687073/aohfs6bqa3o3vljef3t2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687073/xv9gwi5k2puegx4zj3zo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687075/fwpsk2vwj68q6r4j9nan.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687074/gdtwl4em2ucvup39oksr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687074/o6edwa54rf6jwlnoip0a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687075/hjyx4upe0jcwrqeaujtq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687075/bzj4fiw3m7tw5p0avkug.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687075/ozksnzxj1xwvtvtyn4rg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687076/yfr2vmmgormcurdj6p6p.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687076/soppnlygjpohnri85rzj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687076/ydxrim6kyxy3hax7k0eh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687076/p8snnci07vbwjp90fdls.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687076/lajminpajagj2bkm12tj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687077/iem6o7ydjms6it8cpvdt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687077/wuqslj41mxx4xuzdfwii.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687077/cxlqhlpaxqpyn2kclk91.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687078/slvclbak7oeqmsruvurn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687078/fv7bzffdkmhryhbysnbe.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687078/mladrhfornryy4nmlof4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687078/oiyk1rip8ts38cx4iejg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687078/akjjfhriptpa6qeufbzs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687079/i4iiwfkuwh9tkep4qfeb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687080/ulfu9q1fgnumfrvlwwhy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687079/ptelhyakada9ktkwhylj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687080/rvnkmiog9zzcikymyovx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687080/ljfqvurxlylzkjo3fxwj.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687080/n4imydvlu8u6dyzpvaxo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687081/u5wx6n8bgef5dwvj2vf7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687080/jwxh8wcngqzkmjiymtfz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687081/goaicahesgdk23eliov1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687081/pfffsfrtb4mjdyof7gpr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687081/skez6chis7kse6n49ind.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687081/raivbkevifwrdao1sa87.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687081/v9rxwwbqpxari3niria1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687082/gdubyskugd94ncetutwt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687082/axyoakeanfthcrtwbnj7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687082/hf3lpiqhjs0rnifekdbo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687082/o0dnqbsx39nb66agp63w.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687082/va1tndn084u0moomd7p3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687083/h4n4vil7loivpi6fnku7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687083/an5nkbkzqhaqtfyzfvua.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687083/cymddft267d2ta7ryxne.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687083/wscdwheo6auztsn3vbkf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687084/ic86ydj9diyk9fo4lma9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687084/uxf1vq6gtacrozc9xwcy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687084/zuzhczs4nn9iylbfntf2.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687084/nkkgrm6fwp5cjoceczps.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687084/eaitmgqvomqrnkaa3rqv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687084/o6e530cyoaqwcypjbmfg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687085/ix6kpqb2debzbo28mnba.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687085/yytvuu14lgwwnjgbhhcq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687085/uqu8rpkaslu4oox19wmd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687085/wnbqrnzmxrregvcpyfvg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687086/zjln70r4x4a2xegf315j.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687086/qn7b4jocbl45uwseclhk.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687086/hibguiafzpu09wu6sopf.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687086/nbaxp18qy6mt7bgnbwcn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687087/ie5f4nhugcmfrc7qtva3.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687086/jxbgwfnadpxtl1xvkpqq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687087/f1wdny6ewk7ihj6fg7ec.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687087/n0llxj5caegudw28ovz0.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687087/breenkuthcwwsqatiozs.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687088/ljxhkkistqomwcbqtne9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687088/saurvflfv8p8e4d0mr0o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687088/xl5nirrmjgpvh6hm38qn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687088/mthleld5qks8e56onowh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687088/cubvein0h12nj5ovx8ys.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687088/vbaxqsto0xvdctrqvdv5.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687089/jwkewhywglverzoaeen9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687089/xtcjs0bwh4yzui893trw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687089/woklhvvaz2bib47us0s8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687089/gb0hmvd5qz5fve9yx5of.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687089/mxj45byne2ocgerngh1h.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687089/jlv3qiwqa41tp39pkikb.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687090/jloo8mzpkct2nyprz89k.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687090/uwfchsmgv4irrcnowqbw.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687090/vyvglo9w4u7x6cm5ye7a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687090/elkvbl5rq2phqxd6cnmy.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687093/frq6df0b9msodxahrzkt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687091/iju0umiox5bl0dkecmj7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687091/fs9dscftv6anpnsttu9g.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687091/iffng0pjafrbhgqt0r9o.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687092/jajr2lpccpg9179ikcf8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687092/bmmf3hiasbteqooingqm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687092/ynjecwespibr0z9prp9d.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687092/alzzm5cfoyahp96add9m.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687093/leoxh2mwkrcwlpj798ef.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687093/emsjoo5qmskpjqmqr5hg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687093/vry9ajqn5u3ygwmo7oe7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687093/kmerpkxzexedsdezsufh.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687093/iv9yi4axbminp5m6wrpm.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687094/f858xfhmyadds02mzt6a.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687094/qveufo1mdnuh8fnrurgt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687094/na9aelkhnas7ngftznko.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687096/mkvp65fkmhdrkpci0r66.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687096/zp5lkvnk6ome9ru95bhg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687099/v7wjnwbxhzh5hothf6ck.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687095/omi5v60446fibj1puibl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687096/vl3jcqqhdc44v0adpkmt.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687098/rgxj2w7pwa0hjnwm5fvg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687097/v2wuj9lizad0tohvjzsi.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687097/cnhmf9shccjfmqu3rvlp.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687098/rcvp07nqjatqse9pvl20.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687098/ghy3bpsxqk0st19uvvf1.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687099/fp5drthfctirlzeksc0x.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687099/b1u70hyf8yoobr6c1b9p.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687100/ypgzgtj1awclxz0np9zx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687100/fpmrn45hjsg9myexnhvq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687102/ihkunpve6nexzfxllez9.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687102/bsjwhikwhgmxfxqobwk8.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687102/gwjginizsrrhucecmiyz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687103/iixlcimms13nznzps0er.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687105/sje4z81ejc5psickt7t7.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687103/hdik0xsc6t7roz2xovmd.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687106/smexsqrz9vjazcoajajr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687104/mzcrvnlnqfyyxiwoboxl.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687105/t0x2gscngxn5trq3kgju.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687105/x9b6og4zmibp7ozj8tdx.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687106/yl21w3c7ehw1ci5qu76z.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687106/aqfjqowjyvg0wlwpq9vg.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687106/sfumemgxbl953xcesphq.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687108/ct6jxugig2xconhcxuuz.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687107/xkyeestexvhwaudqnjvo.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687108/tdsoyfkwdadel24mvtvn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687108/uxqrlzcaazhsyromefkv.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687108/joix74tzvkuvcmemrau4.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687108/gqygzmjgitumajhx7wus.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687109/yrf00umkf8bbfg7ptmsr.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687109/hngvsr3fqsciqtz9g4ni.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687109/r4uhynevrafolgj6ammn.jpg",
      "https://res.cloudinary.com/afzv0bq5/image/upload/v1785687111/srgwdvzbbbbrqq2annt5.jpg"
    ]
    }, description: { en: "In a world where hunters must battle deadly monsters to protect mankind, Sung Jinwoo, the weakest hunter of all mankind, finds himself in a struggle for survival in a double dungeon. After surviving a near-death trial, he awakens with a unique system that allows him to level up without limits.", id: "Di dunia tempat para hunter harus bertarung melawan monster mematikan demi melindungi umat manusia, Sung Jinwoo — hunter terlemah yang pernah ada — terjebak dalam perjuangan hidup-mati di sebuah double dungeon. Setelah nyaris tewas, ia terbangun dengan sebuah sistem unik yang memungkinkannya naik level tanpa batas." }, dateAdded: "2026-01-10", views: 24500, status: "Completed", author: "Chugong", genre: ["Action", "Fantasy", "Adventure"] },
  { id: "m-2", title: "One Piece", type: "Manga", rating: 4.8, chapters: 1102, coverUrl: "https://raw.githubusercontent.com/sulaimandurimaarif/Manga-Cover/main/One%20Piece.png?v=2",
    // ====== CONTOH: isi halaman gambar per chapter di sini ======
    // Key = nomor chapter, Value = array URL gambar hosting-mu, urut dari halaman 1
    // Chapter yang tidak didaftarkan di sini akan otomatis fallback ke cover.
    chapterImages: {
      1102: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    },
    description: { en: "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!", id: "Monkey D. Luffy tak akan membiarkan siapa pun atau apa pun menghalangi mimpinya menjadi raja bajak laut. Dengan tujuan mengarungi perairan berbahaya Grand Line dan sekitarnya, kapten satu ini tak akan pernah menyerah sampai berhasil merebut harta karun terbesar di dunia: One Piece yang legendaris!" }, dateAdded: "2026-05-15", views: 98000, status: "Ongoing", author: "Eiichiro Oda", genre: ["Action", "Adventure", "Comedy", "Fantasy"] },
  { id: "m-3", title: "Noblesse", type: "Manhwa", rating: 4.7, chapters: 544, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover-noblesse.png?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      544: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "Rai awakens from his 820-year sleep. He starts his new life as a student in a high school founded by his loyal servant, Frankenstein. But his peaceful days are soon interrupted by mysterious attackers known as the Union.", id: "Rai terbangun setelah tertidur selama 820 tahun. Ia memulai kehidupan barunya sebagai murid di sekolah menengah yang didirikan oleh pelayan setianya, Frankenstein. Namun hari-hari tenangnya segera terusik oleh para penyerang misterius dari organisasi bernama Union." }, dateAdded: "2025-11-20", views: 18400, status: "Completed", author: "Son Jeho", genre: ["Action", "Supernatural", "School"] },
  { id: "m-4", title: "Tower of God", type: "Manhwa", rating: 4.6, chapters: 590, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/tower%20of%20god.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      590: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "What do you desire? Money and wealth? Honor and pride? Authority and power? Revenge? Or something that transcends all of them? Whatever you desire—it is here. Tower of God. Reach the top, and everything will be yours.", id: "Apa yang kau inginkan? Uang dan kekayaan? Kehormatan dan kebanggaan? Kekuasaan? Balas dendam? Atau sesuatu yang melampaui semua itu? Apa pun yang kau inginkan—semuanya ada di sini. Menara Tuhan. Capai puncaknya, dan segalanya akan menjadi milikmu." }, dateAdded: "2026-07-01", views: 42000, status: "Ongoing", author: "SIU", genre: ["Action", "Fantasy", "Mystery"] },
  { id: "m-5", title: "Jujutsu Kaisen", type: "Manga", rating: 4.8, chapters: 271, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover-jujutsu-kaisen.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      271: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered. Should any demon consume Sukuna's body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the living from the undead!", id: "Di dunia tempat roh-roh kutukan memangsa manusia tak berdosa, serpihan tubuh iblis legendaris yang ditakuti, Ryomen Sukuna, telah hilang dan tersebar. Jika ada kutukan yang memakan bagian tubuh Sukuna, kekuatan yang didapat bisa menghancurkan dunia. Untungnya, ada sekolah rahasia para penyihir jujutsu yang bertugas melindungi manusia dari ancaman kutukan!" }, dateAdded: "2026-06-25", views: 67000, status: "Completed", author: "Gege Akutami", genre: ["Action", "Supernatural", "Horror"] },
  { id: "m-6", title: "Battle Through the Heavens", type: "Manhua", rating: 4.5, chapters: 402, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/Battle%20Through%20the%20Heavens.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      402: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "In a land where no magic exists. A land where the strong make the rules and weak have to obey. A land filled with alluring treasures and beauty, yet also filled with unforeseen danger. Xiao Yan, who had shown talents none had seen in decades, suddenly lost everything three years ago. What magic caused him to lose all of his powers?", id: "Di sebuah negeri tanpa sihir. Negeri tempat yang kuat membuat aturan dan yang lemah harus tunduk. Negeri yang penuh harta memikat dan keindahan, namun juga penuh bahaya tak terduga. Xiao Yan, yang bakatnya belum pernah terlihat selama puluhan tahun, tiba-tiba kehilangan segalanya tiga tahun lalu. Kekuatan macam apa yang membuatnya kehilangan semua kekuatannya?" }, dateAdded: "2026-02-14", views: 15900, status: "Ongoing", author: "Tian Can Tu Dou", genre: ["Action", "Fantasy", "Martial Arts"] },
  { id: "m-7", title: "My Hero Academia", type: "Manga", rating: 4.4, chapters: 398, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover%20my%20hero%20academia.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      398: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all, gives him a chance to change his destiny...", id: "Izuku Midoriya, murid SMP, ingin menjadi pahlawan melebihi apa pun, tapi ia tak punya kekuatan sama sekali. Tanpa peluang masuk ke SMA U.A. yang bergengsi bagi calon pahlawan, hidupnya terasa semakin buntu. Namun pertemuannya dengan All Might, pahlawan terhebat sepanjang masa, memberinya kesempatan untuk mengubah takdirnya..." }, dateAdded: "2026-04-18", views: 35000, status: "Completed", author: "Kohei Horikoshi", genre: ["Action", "School", "Superhero"] },
  { id: "m-8", title: "The Breaker", type: "Manhwa", rating: 4.7, chapters: 200, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/the%20breaker.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      200: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "The new English teacher, Chun-Woo, is not your ordinary teacher. Shioon, a victim of constant bullying, accidentally witnesses Chun-Woo's martial arts power, and begs Chun-Woo to make him his disciple.", id: "Chun-Woo, guru bahasa Inggris baru, bukanlah guru biasa. Shioon, korban perundungan yang terus-menerus, secara tak sengaja menyaksikan kekuatan bela diri Chun-Woo dan memohon untuk dijadikan muridnya." }, dateAdded: "2025-09-05", views: 12000, status: "Completed", author: "Jeon Geuk-jin", genre: ["Action", "Martial Arts", "School"] },
  { id: "m-9", title: "Martial Peak", type: "Manhua", rating: 4.3, chapters: 2400, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover%20martial%20peak.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      2400: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "The journey to the martial peak is a lonely, solitary and long struggle. In the face of adversity, you must survive and remain unyielding. Only then can you break through and continue on your journey to become the strongest.", id: "Perjalanan menuju puncak ilmu bela diri adalah perjuangan panjang yang sunyi dan sendirian. Di hadapan kesulitan, kau harus bertahan hidup dan tetap teguh. Hanya dengan begitu kau bisa menerobos batas dan melanjutkan perjalanan menjadi yang terkuat." }, dateAdded: "2026-07-15", views: 89000, status: "Ongoing", author: "Momo", genre: ["Action", "Martial Arts", "Adventure"] },
  { id: "m-10", title: "Demon Slayer", type: "Manga", rating: 4.9, chapters: 205, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover%20demon%20slayer.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      205: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a demon slayer to turn his sister back into a human.", id: "Di zaman Taisho, Jepang, Tanjiro, seorang anak baik hati yang berjualan arang, mendapati keluarganya dibantai oleh iblis. Lebih parah lagi, adiknya, Nezuko, satu-satunya yang selamat, telah berubah menjadi iblis. Meski hancur oleh kenyataan pahit ini, Tanjiro bertekad menjadi pembasmi iblis demi mengembalikan adiknya menjadi manusia kembali." }, dateAdded: "2026-03-30", views: 75000, status: "Completed", author: "Koyoharu Gotouge", genre: ["Action", "Supernatural", "Historical"] },
  { id: "m-11", title: "Chainsaw Man", type: "Manga", rating: 4.7, chapters: 150, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover%20chainsaw%20man.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      150: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses with Pochita. One day, Denji is betrayed and killed. As his consciousness fades, he makes a contract with Pochita and gets revived as Chainsaw Man.", id: "Denji adalah remaja yang hidup bersama iblis gergaji mesin bernama Pochita. Karena utang yang ditinggalkan ayahnya, ia menjalani hidup yang sangat berat sambil melunasi utang tersebut dengan memburu mayat iblis bersama Pochita. Suatu hari, Denji dikhianati dan dibunuh. Saat kesadarannya memudar, ia membuat kontrak dengan Pochita dan bangkit kembali sebagai Chainsaw Man." }, dateAdded: "2026-05-02", views: 51000, status: "Ongoing", author: "Tatsuki Fujimoto", genre: ["Action", "Horror", "Dark Fantasy"] },
  { id: "m-12", title: "Tales of Demons and Gods", type: "Manhua", rating: 4.6, chapters: 455, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover%20talles%20demon.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      455: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "Killed by a Sage Emperor and reborn as his 13-year-old self, Nie Li was given a second chance at life. A second chance to change everything, save his loved ones and his beloved city. He shall once again battle with the Sage Emperor to avenge his death.", id: "Terbunuh oleh seorang Sage Emperor dan terlahir kembali sebagai dirinya sendiri di usia 13 tahun, Nie Li diberi kesempatan kedua untuk hidup. Kesempatan kedua untuk mengubah segalanya, menyelamatkan orang-orang tercinta dan kotanya. Ia akan kembali bertarung melawan Sage Emperor untuk membalas kematiannya." }, dateAdded: "2026-06-12", views: 33000, status: "Ongoing", author: "Mad Snail", genre: ["Action", "Fantasy", "Reincarnation"] },
  { id: "m-13", title: "One Punch Man", type: "Manga", rating: 4.9, chapters: 1, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/one%20punch%20man.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      1: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "Saitama used to be just an ordinary man in a world where being a hero was a profession. However, after encountering a boy under attack by a monster, he recalled his childhood dream of becoming a hero. He then trained every day until all his hair fell out. Saitama became a powerful hero, yet one thing troubled him: he had become so strong that he could defeat any monster with just a single punch.", id: "Saitama dulunya hanyalah lelaki biasa dalam dunia dimana pahlawan menjadi sebuah pekerjaan. Tetapi ketika Ia bertemu dengan seorang anak lelaki yang sedang diserang monster, dia mengingat cita-cita masa kecilnya untuk menjadi pahlawan. Lalu dia berlatih setiap hari hingga semua rambutnya rontok. Saitama pun menjadi pahlawan yang kuat, tetapi ada satu hal yang mencemaskan dia. Yaitu dia menjadi terlalu kuat, hingga dia dapat mengalahkan setiap monster hanya dengan satu tinjuan." }, dateAdded: "2026-06-12", views: 33000, status: "Ongoing", author: "Mad Snail", genre: ["Action", "Fantasy", "Reincarnation"] },
{ id: "m-14", title: "I Randomly Have A New Career Every Week", type: "Manhua", rating: 4.7, chapters: 1, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/one%20punch%20man.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      1: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "After being let go by his company, Lin Yi accidentally acquires a \"Professional Part-Time Worker Experience\" system. Leveraging the various professional assignments and generous rewards provided by the system, he steadily pursues his ambitions and path to wealth, eventually rising to become an all-powerful tycoon who dominates the world.", id: "Setelah diberhentikan oleh perusahaan, Lin Yi mendapatkan sistem “pengalaman pekerja paruh waktu profesional” secara tidak sengaja. Lin Yi mengandalkan berbagai pengaturan profesional dan penghargaan murah hati yang diberikan oleh sistem untuk mencapai ambisinya dan jalannya untuk menjadi kaya selangkah demi selangkah semakin tertuju, sampai akhirnya menjadi bos yang sangat kuat untuk mendominasi dunia." }, dateAdded: "2026-06-12", views: 12000, status: "Ongoing", author: "Mad Snail", genre: ["Action", "Fantasy", "Reincarnation"] },

  // Anime items
  { id: "a-1", title: "Jujutsu Kaisen", type: "Anime", rating: 4.8, episodes: 24, color: "linear-gradient(135deg, #1e1b4b, #4338ca)", description: { en: "Yuuji Itadori, a high school student who harbors extraordinary physical abilities, swallows the finger of Ryomen Sukuna, a curse, to save a friend. He joins the Tokyo Metropolitan Jujutsu Technical High School to find all of Sukuna's fingers and exorcise the curse.", id: "Yuuji Itadori, murid SMA dengan kemampuan fisik luar biasa, menelan jari Ryomen Sukuna, sebuah kutukan, demi menyelamatkan temannya. Ia bergabung dengan Sekolah Teknik Jujutsu Tokyo untuk mengumpulkan seluruh jari Sukuna dan mengusir kutukan itu selamanya." }, dateAdded: "2026-06-25", views: 88000, status: "Completed", author: "Studio MAPPA", genre: ["Action", "Supernatural", "Horror"] },
  { id: "a-2", title: "Demon Slayer", type: "Anime", rating: 4.9, episodes: 44, color: "linear-gradient(135deg, #7f1d1d, #ef4444)", description: { en: "Tanjiro Kamado's journey to slay demons and rescue his sister Nezuko is beautifully animated by Ufotable. Spanning multiple television seasons and blockbuster movies, this is a modern global phenomenon.", id: "Perjalanan Tanjiro Kamado membasmi iblis demi menyelamatkan adiknya, Nezuko, dianimasikan dengan indah oleh Ufotable. Melewati beberapa musim tayang dan film box office, ini adalah fenomena global masa kini." }, dateAdded: "2026-03-30", views: 120000, status: "Completed", author: "Studio Ufotable", genre: ["Action", "Supernatural", "Historical"] },
  { id: "a-3", title: "One Piece", type: "Anime", rating: 4.7, episodes: 1100, color: "linear-gradient(135deg, #7c2d12, #f97316)", description: { en: "The legendary anime adaptation of Eiichiro Oda's masterpiece manga. Luffy and his Straw Hat crew sail across the sea in search of the legendary One Piece.", id: "Adaptasi anime legendaris dari manga karya besar Eiichiro Oda. Luffy dan kru topi jerami-nya berlayar mengarungi lautan mencari harta karun legendaris, One Piece." }, dateAdded: "2026-05-15", views: 150000, status: "Ongoing", author: "Studio Toei Animation", genre: ["Action", "Adventure", "Comedy", "Fantasy"] },
  { id: "a-4", title: "Attack on Titan", type: "Anime", rating: 4.8, episodes: 87, color: "linear-gradient(135deg, #312e81, #1e1b4b)", description: { en: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born of hunger but what seems to be out of pleasure.", id: "Berabad-abad lalu, umat manusia hampir punah dibantai oleh makhluk raksasa menyerupai manusia bernama titan, memaksa manusia bersembunyi ketakutan di balik tembok raksasa berlapis. Yang membuat raksasa ini benar-benar mengerikan adalah nafsu memakan manusia mereka bukan karena lapar, melainkan seperti demi kesenangan." }, dateAdded: "2025-12-05", views: 95000, status: "Completed", author: "Studio Wit / MAPPA", genre: ["Action", "Drama", "Fantasy"] },
  { id: "a-5", title: "Spy x Family", type: "Anime", rating: 4.7, episodes: 25, color: "linear-gradient(135deg, #065f46, #0f766e)", description: { en: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife is a deadly assassin and his daughter is a telepath, but they all hide their secrets from each other.", id: "Seorang mata-mata yang menjalankan misi rahasia menikah dan mengadopsi anak sebagai bagian dari penyamarannya. Istrinya ternyata seorang pembunuh bayaran mematikan, dan putrinya seorang telepati, namun mereka semua menyembunyikan rahasia masing-masing satu sama lain." }, dateAdded: "2026-04-10", views: 48000, status: "Completed", author: "Studio CloverWorks", genre: ["Comedy", "Action", "Slice of Life"] }
];

// ====== VERSI DATA — naikkan angka ini setiap kali DEFAULT_TITLES diubah ======
// Ini memaksa localStorage lama ter-reset otomatis saat app dibuka
const DATA_VERSION = "v15";

const DEFAULT_USERS = [
  { email: "guest@kagami.com", name: "Guest Kagami", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Guest", password: "password123" }
];

// ====== I18N DICTIONARY (Bahasa Indonesia / English) ======
const I18N = {
  id: {
    nav_explore: "Explore", nav_latest: "Latest", nav_library: "Library", nav_upload: "Upload",
    nav_search: "Cari", nav_upload_short: "Unggah",
    search_placeholder: "Cari komik atau anime...",
    search_input_placeholder: "Masukkan judul manga, manhwa, manhua, atau anime...",
    sec_hot_manga: "Hot Manga", sec_trending_manhwa: "Trending Manhwa", sec_epic_manhua: "Epic Manhua", sec_watch_anime: "Tonton Anime",
    sec_latest: "Rilis Terbaru", sec_saved: "Koleksi Favorit",
    view_all: "Lihat Semua",
    chip_all: "Semua", chip_manga: "Manga", chip_manhwa: "Manhwa", chip_manhua: "Manhua", chip_anime: "Anime",
    library_title: "Pustaka Saya", library_tab_fav: "Favorit", library_tab_history: "Riwayat Baca",
    library_history_desc: "Judul dan chapter/episode terakhir yang Anda baca.", library_clear_history: "Hapus Riwayat",
    filter_format: "Format", filter_status: "Status", filter_sort: "Urutkan", filter_genre: "Genre", filter_all: "Semua",
    filter_ongoing: "Ongoing", filter_completed: "Completed", filter_reset: "Reset Filter",
    sort_relevance: "Relevansi", sort_rating: "Rating Tertinggi", sort_latest: "Terbaru", sort_popular: "Paling Populer", sort_title: "Judul A-Z",
    btn_start_reading: "Mulai Membaca", btn_watch_anime: "Tonton Anime", btn_save: "Save", btn_saved: "Saved",
    empty_search_title: "Mulailah Mengetik...", empty_search_desc: "Cari manga, manhwa, manhua favorit Anda berdasarkan judul.",
    empty_saved_title: "Belum Ada Favorit", empty_saved_desc: "Judul yang Anda simpan akan muncul di sini. Cari judul menarik dan klik ikon hati!",
    empty_history_title: "Belum Ada Riwayat", empty_history_desc: "Judul yang Anda baca akan tercatat di sini secara otomatis.",
    empty_login_title: "Akses Dibatasi", empty_login_desc: "Silakan log in terlebih dahulu untuk melihat konten ini.", btn_login_now: "Log In Sekarang",
    auth_tab_login: "Masuk", auth_tab_signup: "Daftar",
    footer_about: "Tentang", footer_contact: "Kontak", footer_privacy: "Privasi",
    install_title: "Pasang Kagami App", install_desc: "Baca manga & nonton offline lebih lancar",
    genre_label: "Genre:", author_label: "Penulis:",
    anime_cs_eyebrow: "SEDANG DALAM PENGERJAAN",
    anime_cs_heading_1: "Nonton anime akan",
    anime_cs_heading_2: "segera hadir.",
    anime_cs_desc: "Pengalaman menonton yang tenang dan indah, terhubung langsung dengan pustaka Kagami Anda, sedang dalam pengembangan.",
    anime_cs_notify: "Beritahu Saya",
    trending_title: "Sedang Tren", trending_sub: "Paling banyak dibaca hari ini.", trending_reads: "Dibaca",
    toast_bookmark_added: "✅ Berhasil disimpan ke favorit!", toast_bookmark_removed: "💔 Dihapus dari favorit",
    toast_download_done: "berhasil diunduh", toast_download_fail: "⚠️ Unduh otomatis gagal (CORS). Gambar dibuka di tab baru, silakan simpan manual.",
    toast_download_none: "⚠️ Tidak ada gambar untuk diunduh.", toast_downloading: "Mengunduh",
    toast_logout: "👋 Berhasil Log Out!", toast_upload_login_required: "⚠️ Silakan log in untuk mengunggah judul!",
    toast_upload_required_fields: "⚠️ Silakan isi semua field wajib!", toast_upload_success: "Sukses mengunggah",
    toast_history_cleared: "🗑️ Riwayat baca berhasil dihapus", toast_filter_applied: "Filter",
    toast_welcome_back: "🎉 Selamat datang kembali,", toast_signup_success: "🎉 Akun berhasil dibuat! Selamat datang,",
    toast_pwa_installed: "✅ Kagami berhasil dipasang!", toast_welcome_app: "📚 Selamat datang di Kagami!",
    toast_last_episode: "Ini adalah episode terakhir!", toast_fullscreen_unsupported: "Fullscreen tidak didukung pada browser Anda",
    err_email_registered: "Email sudah terdaftar!", err_login_invalid: "Email atau password salah!", err_bookmark_login_required: "Silakan log in terlebih dahulu untuk menyimpan!",
  },
  en: {
    nav_explore: "Explore", nav_latest: "Latest", nav_library: "Library", nav_upload: "Upload",
    nav_search: "Search", nav_upload_short: "Upload",
    search_placeholder: "Search comics or anime...",
    search_input_placeholder: "Enter manga, manhwa, manhua, or anime title...",
    sec_hot_manga: "Hot Manga", sec_trending_manhwa: "Trending Manhwa", sec_epic_manhua: "Epic Manhua", sec_watch_anime: "Watch Anime",
    sec_latest: "Latest Releases", sec_saved: "Favorite Collection",
    view_all: "View All",
    chip_all: "All", chip_manga: "Manga", chip_manhwa: "Manhwa", chip_manhua: "Manhua", chip_anime: "Anime",
    library_title: "My Library", library_tab_fav: "Favorites", library_tab_history: "Reading History",
    library_history_desc: "Titles and the last chapter/episode you read.", library_clear_history: "Clear History",
    filter_format: "Format", filter_status: "Status", filter_sort: "Sort By", filter_genre: "Genre", filter_all: "All",
    filter_ongoing: "Ongoing", filter_completed: "Completed", filter_reset: "Reset Filters",
    sort_relevance: "Relevance", sort_rating: "Highest Rating", sort_latest: "Latest", sort_popular: "Most Popular", sort_title: "Title A-Z",
    btn_start_reading: "Start Reading", btn_watch_anime: "Watch Anime", btn_save: "Save", btn_saved: "Saved",
    empty_search_title: "Start Typing...", empty_search_desc: "Search for your favorite manga, manhwa, or manhua by title.",
    empty_saved_title: "No Favorites Yet", empty_saved_desc: "Titles you save will appear here. Find something interesting and tap the heart icon!",
    empty_history_title: "No History Yet", empty_history_desc: "Titles you read will be automatically logged here.",
    empty_login_title: "Access Restricted", empty_login_desc: "Please log in first to view this content.", btn_login_now: "Log In Now",
    auth_tab_login: "Login", auth_tab_signup: "Sign Up",
    footer_about: "About", footer_contact: "Contact", footer_privacy: "Privacy",
    install_title: "Install Kagami App", install_desc: "Smoother offline reading & watching",
    genre_label: "Genre:", author_label: "Author:",
    anime_cs_eyebrow: "CURRENTLY IN THE WORKS",
    anime_cs_heading_1: "Anime is coming",
    anime_cs_heading_2: "soon.",
    anime_cs_desc: "A calm, beautiful viewing experience connected to your Kagami library is now in development.",
    anime_cs_notify: "Notify me",
    trending_title: "Now Trending", trending_sub: "Most read today.", trending_reads: "Reads",
    toast_bookmark_added: "✅ Added to favorites!", toast_bookmark_removed: "💔 Removed from favorites",
    toast_download_done: "downloaded successfully", toast_download_fail: "⚠️ Automatic download failed (CORS). Image opened in a new tab, please save it manually.",
    toast_download_none: "⚠️ No images available to download.", toast_downloading: "Downloading",
    toast_logout: "👋 Successfully logged out!", toast_upload_login_required: "⚠️ Please log in to upload a title!",
    toast_upload_required_fields: "⚠️ Please fill in all required fields!", toast_upload_success: "Successfully uploaded",
    toast_history_cleared: "🗑️ Reading history cleared", toast_filter_applied: "Filter",
    toast_welcome_back: "🎉 Welcome back,", toast_signup_success: "🎉 Account created! Welcome,",
    toast_pwa_installed: "✅ Kagami installed successfully!", toast_welcome_app: "📚 Welcome to Kagami!",
    toast_last_episode: "This is the last episode!", toast_fullscreen_unsupported: "Fullscreen is not supported on your browser",
    err_email_registered: "Email is already registered!", err_login_invalid: "Incorrect email or password!", err_bookmark_login_required: "Please log in first to save this!",
  }
};

function t(key) {
  const lang = (typeof state !== 'undefined' && state.lang) ? state.lang : (localStorage.getItem('kagami_lang') || 'id');
  return (I18N[lang] && I18N[lang][key]) || (I18N.id[key]) || key;
}

function applyLanguage(lang) {
  if (!I18N[lang]) lang = 'id';
  state.lang = lang;
  localStorage.setItem('kagami_lang', lang);
  document.documentElement.lang = lang;

  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (I18N[lang][key]) el.placeholder = I18N[lang][key];
  });

  // Update the language badge label in header
  const label = document.getElementById('langCurrentLabel');
  if (label) label.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Re-render dynamic content that contains translated strings
  refreshActiveView();
}

// Redraws whichever grid/view is currently active (used after language switch)
function refreshActiveView() {
  switch (state.activeView) {
    case 'explore': renderExploreGrids(); break;
    case 'latest': renderLatestGrid(); break;
    case 'saved': renderSavedGrid(); renderHistoryGrid(); break;
    case 'search': renderSearchGrid(); break;
    case 'category-view': renderCategoryGrid(state.viewAllCategory); break;
    default: break;
  }

  // Jika modal detail sedang terbuka, refresh juga sinopsis & genre-nya
  const detailsModal = document.getElementById('detailsModal');
  if (detailsModal && detailsModal.classList.contains('active') && currentDetailItemId) {
    openDetailsModal(currentDetailItemId);
  }
}

// Menerjemahkan status data (Ongoing/Completed) sesuai bahasa aktif
function translateStatus(status) {
  if (status === 'Ongoing') return t('filter_ongoing');
  if (status === 'Completed') return t('filter_completed');
  return status;
}

// Mengambil sinopsis sesuai bahasa aktif. Mendukung format baru {id, en}
// maupun format lama (string biasa) untuk kompatibilitas judul yang diunggah pengguna.
function getLocalizedDesc(item) {
  const d = item && item.description;
  if (!d) return "";
  if (typeof d === 'string') return d;
  return d[state.lang] || d.id || d.en || "";
}

// Kamus terjemahan genre (nama judul tidak diterjemahkan, hanya label genre)
const GENRE_TRANSLATIONS = {
  Action: "Aksi", Adventure: "Petualangan", Comedy: "Komedi", Fantasy: "Fantasi",
  Mystery: "Misteri", Supernatural: "Supernatural", Horror: "Horor",
  "Martial Arts": "Bela Diri", School: "Sekolah", Superhero: "Pahlawan Super",
  Historical: "Sejarah", "Dark Fantasy": "Fantasi Gelap", Reincarnation: "Reinkarnasi",
  Drama: "Drama", "Slice of Life": "Kehidupan Sehari-hari", Romance: "Romansa",
  "Sci-Fi": "Fiksi Ilmiah", Psychological: "Psikologis", Tragedy: "Tragedi",
  Sports: "Olahraga", Isekai: "Isekai"
};

// Menerjemahkan satu label genre sesuai bahasa aktif (nama genre asing tetap ditampilkan bila tak ada terjemahan)
function translateGenre(genre) {
  if (state.lang !== 'id') return genre;
  return GENRE_TRANSLATIONS[genre] || genre;
}

// ====== STATE ENGINE ======
class AppState {
  constructor() {
    // Auto-reset cache jika versi data berbeda (misal setelah edit DEFAULT_TITLES)
    const savedVersion = localStorage.getItem('kagami_data_version');
    if (savedVersion !== DATA_VERSION) {
      localStorage.removeItem('kagami_titles');
      localStorage.removeItem('kagami_users');
      localStorage.setItem('kagami_data_version', DATA_VERSION);
    }

    this.titles = JSON.parse(localStorage.getItem('kagami_titles')) || DEFAULT_TITLES;
    this.users = JSON.parse(localStorage.getItem('kagami_users')) || DEFAULT_USERS;
    this.currentUser = JSON.parse(localStorage.getItem('kagami_session')) || null;
    this.searchQuery = "";
    this.activeFilter = "all"; // 'all', 'manga', 'manhwa', 'manhua', 'anime'
    this.activeView = "explore"; // 'explore', 'latest', 'saved', 'upload', 'search', 'category-view'
    this.viewAllCategory = null; // Used when activeView is 'category-view'

    // Advanced search filters state
    this.searchFilters = { genres: [], status: "all", format: "all", sort: "relevance", author: null };

    // Language & Theme preferences
    this.lang = localStorage.getItem('kagami_lang') || 'id';
    this.theme = localStorage.getItem('kagami_theme') || 'dark';

    // Save to local storage immediately if not present
    if (!localStorage.getItem('kagami_titles')) this.saveTitles();
    if (!localStorage.getItem('kagami_users')) this.saveUsers();
  }

  saveTitles() {
    localStorage.setItem('kagami_titles', JSON.stringify(this.titles));
  }

  saveUsers() {
    localStorage.setItem('kagami_users', JSON.stringify(this.users));
  }

  saveSession() {
    localStorage.setItem('kagami_session', JSON.stringify(this.currentUser));
  }

  addUser(email, name, password, avatarUrl = null) {
    if (this.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: t('err_email_registered') };
    }
    const avatar = avatarUrl || `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(name)}`;
    const newUser = { email, name, password, avatar, bookmarks: [] };
    this.users.push(newUser);
    this.saveUsers();
    return { success: true, user: newUser };
  }

  login(email, password) {
    const user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) return { success: false, message: t('err_login_invalid') };
    
    this.currentUser = {
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      bookmarks: user.bookmarks || [],
      history: user.history || []
    };
    this.saveSession();
    return { success: true, user: this.currentUser };
  }

  loginGoogle(email, name, avatar) {
    // If user already exists in db, login, otherwise sign up automatically
    let user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      user = {
        email: email,
        name: name,
        avatar: avatar,
        password: "google_login_no_password",
        bookmarks: []
      };
      this.users.push(user);
      this.saveUsers();
    }

    this.currentUser = {
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      bookmarks: user.bookmarks || [],
      history: user.history || []
    };
    this.saveSession();
    return this.currentUser;
  }

  logout() {
    // Sync bookmarks back to global user db before logging out
    if (this.currentUser) {
      const userIdx = this.users.findIndex(u => u.email.toLowerCase() === this.currentUser.email.toLowerCase());
      if (userIdx !== -1) {
        this.users[userIdx].bookmarks = this.currentUser.bookmarks;
        this.saveUsers();
      }
    }
    this.currentUser = null;
    localStorage.removeItem('kagami_session');
  }

  addTitle(title, type, rating, chaptersCount, description, coverDataUrl = null, coverGradient = null, author = "", genreList = []) {
    const isAnime = type.toLowerCase() === 'anime';
    const id = `${isAnime ? 'a' : 'm'}-${Date.now()}`;
    const newTitle = {
      id,
      title,
      type: type, // Manga, Manhwa, Manhua, Anime
      rating: parseFloat(rating) || 5.0,
      description: description || "No description available.",
      dateAdded: new Date().toISOString().split('T')[0],
      views: 0,
      status: "Ongoing",
      author: author || "Anonim",
      genre: (genreList && genreList.length > 0) ? genreList : ["Belum Dikategorikan"]
    };

    if (isAnime) {
      newTitle.episodes = parseInt(chaptersCount) || 12;
    } else {
      newTitle.chapters = parseInt(chaptersCount) || 1;
    }

    if (coverDataUrl) {
      newTitle.coverUrl = coverDataUrl;
    } else {
      newTitle.color = coverGradient || "linear-gradient(135deg, #1e293b, #0f172a)";
    }

    this.titles.unshift(newTitle); // Add to the beginning
    this.saveTitles();
    return newTitle;
  }

  toggleBookmark(titleId) {
    if (!this.currentUser) {
      return { success: false, message: t('err_bookmark_login_required') };
    }
    
    if (!this.currentUser.bookmarks) {
      this.currentUser.bookmarks = [];
    }

    const idx = this.currentUser.bookmarks.indexOf(titleId);
    let added = false;
    if (idx === -1) {
      this.currentUser.bookmarks.push(titleId);
      added = true;
    } else {
      this.currentUser.bookmarks.splice(idx, 1);
    }
    
    this.saveSession();
    
    // Sync to user database
    const userIdx = this.users.findIndex(u => u.email.toLowerCase() === this.currentUser.email.toLowerCase());
    if (userIdx !== -1) {
      this.users[userIdx].bookmarks = this.currentUser.bookmarks;
      this.saveUsers();
    }

    return { success: true, bookmarked: added };
  }

  isBookmarked(titleId) {
    return this.currentUser && this.currentUser.bookmarks && this.currentUser.bookmarks.includes(titleId);
  }

  // ====== READING HISTORY (Riwayat Baca) ======
  addHistory(titleId, index) {
    if (!this.currentUser) return; // Riwayat hanya untuk user yang log in

    if (!this.currentUser.history) this.currentUser.history = [];

    // Buang entri lama untuk judul yang sama, lalu taruh di paling depan
    this.currentUser.history = this.currentUser.history.filter(h => h.id !== titleId);
    this.currentUser.history.unshift({ id: titleId, index, timestamp: Date.now() });

    // Batasi maksimal 50 entri riwayat
    if (this.currentUser.history.length > 50) {
      this.currentUser.history = this.currentUser.history.slice(0, 50);
    }

    this.saveSession();

    // Sinkron ke database user
    const userIdx = this.users.findIndex(u => u.email.toLowerCase() === this.currentUser.email.toLowerCase());
    if (userIdx !== -1) {
      this.users[userIdx].history = this.currentUser.history;
      this.saveUsers();
    }
  }

  getHistory() {
    if (!this.currentUser || !this.currentUser.history) return [];
    return this.currentUser.history;
  }

  clearHistory() {
    if (!this.currentUser) return;
    this.currentUser.history = [];
    this.saveSession();
    const userIdx = this.users.findIndex(u => u.email.toLowerCase() === this.currentUser.email.toLowerCase());
    if (userIdx !== -1) {
      this.users[userIdx].history = [];
      this.saveUsers();
    }
  }
}

// Instantiate Global State
const state = new AppState();

// ====== TOAST ALERT ======
function showToast(message, isError = false) {
  const container = document.getElementById('toastContainer');
  const toast = document.getElementById('toast');
  const text = document.getElementById('toastMessage');
  const icon = document.getElementById('toastIcon');

  text.textContent = message;
  
  if (isError) {
    toast.className = 'toast toast-error';
    icon.className = 'fas fa-exclamation-circle toast-error-icon';
  } else {
    toast.className = 'toast';
    icon.className = 'fas fa-check-circle toast-success-icon';
  }

  container.classList.add('show');
  
  clearTimeout(container._timeout);
  container._timeout = setTimeout(() => {
    container.classList.remove('show');
  }, 3000);
}

// ====== VIEW CONTROLLER ======
function switchView(viewName, options = {}) {
  // Update view state
  state.activeView = viewName;
  
  // Deactivate all view containers
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.remove('active');
  });

  // Activate destination view
  const targetView = document.getElementById(`${viewName}View`);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Handle Bottom Nav Highlight
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.viewBtn === viewName || (viewName === 'category-view' && item.dataset.viewBtn === 'explore')) {
      item.classList.add('active');
    }
  });

  // Handle Desktop Header Nav Highlight
  document.querySelectorAll('.desktop-nav a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.view === viewName || (viewName === 'category-view' && link.dataset.view === 'explore')) {
      link.classList.add('active');
    }
  });

  // Action overrides based on view
  if (viewName === 'explore') {
    state.activeFilter = "all";
    updateFilterChips();
    renderExploreGrids();
  } else if (viewName === 'latest') {
    renderLatestGrid();
  } else if (viewName === 'saved') {
    renderSavedGrid();
    renderHistoryGrid();
  } else if (viewName === 'category-view') {
    state.viewAllCategory = options.category;
    renderCategoryGrid(options.category);
  } else if (viewName === 'search') {
    document.getElementById('searchQueryInput').focus();
    renderGenreFilterChips();
    renderSearchGrid();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update Filter Active state
function updateFilterChips() {
  document.querySelectorAll('.filter-chips .chip').forEach(chip => {
    chip.classList.remove('active');
    if (chip.dataset.filter === state.activeFilter) {
      chip.classList.add('active');
    }
  });
}

// ====== CARD COMPONENT GENERATOR ======
function createMangaCard(item) {
  const isAnime = item.type.toLowerCase() === 'anime';
  const metaIcon = isAnime ? 'fa-play-circle' : 'fa-book-open';
  const metaVal = isAnime ? `${item.episodes} eps` : `${item.chapters} ch`;
  const bookmarkedClass = state.isBookmarked(item.id) ? 'active' : '';
  const bookmarkIcon = state.isBookmarked(item.id) ? 'fa-heart' : 'far fa-heart';
  
  // Checking added date within last 30 days for [NEW] badge
  const isNew = (Date.now() - new Date(item.dateAdded).getTime()) < (30 * 24 * 60 * 60 * 1000);
  const badgeHTML = `
    <div class="card-badges">
      <span class="badge-type">${item.type}</span>
      ${isNew ? '<span class="badge-new">NEW</span>' : ''}
    </div>
  `;

  // Fallback placeholder jika gambar gagal load
  const placeholderStyle = item.color || 'var(--surface-tertiary)';
  const placeholderIcon = isAnime ? 'fa-video' : 'fa-book';

  let coverHTML = '';
  if (item.coverUrl) {
    coverHTML = `
      <img
        src="${item.coverUrl}"
        alt="${item.title}"
        loading="lazy"
        style="width:100%;height:100%;object-fit:cover;"
        onerror="this.style.display='none';this.parentElement.querySelector('.card-img-placeholder').style.display='flex';"
      >
      <div class="card-img-placeholder" style="display:none;background:${placeholderStyle}">
        <i class="fas ${placeholderIcon}"></i>
        <span>${item.title}</span>
      </div>
    `;
  } else {
    coverHTML = `
      <div class="card-img-placeholder" style="background: ${placeholderStyle}">
        <i class="fas ${placeholderIcon}"></i>
        <span>${item.title}</span>
      </div>
    `;
  }

  return `
    <div class="manga-card" data-id="${item.id}">
      <button class="btn-bookmark-float ${bookmarkedClass}" data-id="${item.id}">
        <i class="${bookmarkIcon}"></i>
      </button>
      <div class="card-img-wrapper">
        ${coverHTML}
        ${badgeHTML}
        ${isAnime ? '<div class="card-play-pulse"><i class="fas fa-play"></i></div>' : ''}
      </div>
      <div class="card-content">
        <h4>${item.title}</h4>
        <div class="card-meta">
          <span class="meta-chapters"><i class="fas ${metaIcon}"></i> ${metaVal}</span>
          <span class="meta-rating"><i class="fas fa-star"></i> ${item.rating}</span>
        </div>
      </div>
    </div>
  `;
}

function formatViews(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return `${num}`;
}

function createTrendingCard(item, rank) {
  const fallbackBg = item.color || 'var(--surface-tertiary)';
  const coverHTML = item.coverUrl
    ? `<img src="${item.coverUrl}" alt="${item.title}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='${fallbackBg}';">`
    : `<div class="trending-cover-gradient" style="background:${fallbackBg};"></div>`;

  return `
    <div class="trending-card" data-id="${item.id}">
      <div class="trending-cover">
        <span class="trending-rank">#${rank}</span>
        ${coverHTML}
        <div class="trending-cover-scrim"></div>
        <h4 class="trending-card-title">${item.title}</h4>
      </div>
      <div class="trending-meta">
        <span><i class="fas fa-eye"></i> ${formatViews(item.views)} ${t('trending_reads')}</span>
        <span class="trending-rating"><i class="fas fa-star"></i> ${item.rating}</span>
      </div>
    </div>
  `;
}

function renderTrendingGrid() {
  const track = document.getElementById('trendingTrack');
  if (!track) return;

  const sorted = [...state.titles].sort((a, b) => b.views - a.views).slice(0, 10);
  track.innerHTML = sorted.map((item, idx) => createTrendingCard(item, idx + 1)).join('');

  track.querySelectorAll('.trending-card').forEach(card => {
    card.addEventListener('click', () => openDetailsModal(card.dataset.id));
  });
}

// ====== RENDER EXPLOITS ======
function renderExploreGrids() {
  renderTrendingGrid();

  const list = state.titles;
  const filter = state.activeFilter;
  
  // Render grids based on section
  const sections = [
    { gridId: 'exploreMangaGrid', type: 'Manga', title: 'Manga' },
    { gridId: 'exploreManhwaGrid', type: 'Manhwa', title: 'Manhwa' },
    { gridId: 'exploreManhuaGrid', type: 'Manhua', title: 'Manhua' },
    { gridId: 'exploreAnimeGrid', type: 'Anime', title: 'Anime' }
  ];

  sections.forEach(sec => {
    const grid = document.getElementById(sec.gridId);
    const wrapper = grid.closest('.section-wrapper');
    if (!grid || !wrapper) return;

    // Filter list for this specific category
    let filtered = list.filter(item => item.type.toLowerCase() === sec.type.toLowerCase());

    // Search query filter
    if (state.searchQuery) {
      filtered = filtered.filter(item => item.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
    }

    // Apply main chips filter (e.g. if 'manga' chip selected, hide other sections)
    const matchesMainFilter = filter === 'all' || filter === sec.type.toLowerCase();
    
    if (filtered.length > 0 && matchesMainFilter) {
      wrapper.style.display = 'block';
      // Limit to 6 on homepage
      const displayedItems = filtered.slice(0, 6);
      grid.innerHTML = displayedItems.map(item => createMangaCard(item)).join('');
    } else {
      wrapper.style.display = 'none';
    }
  });

  attachCardEvents();
}

function renderLatestGrid() {
  const grid = document.getElementById('latestGrid');
  if (!grid) return;

  // Sort by dateAdded desc
  const sorted = [...state.titles].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
  
  if (sorted.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-history"></i><h4>Belum ada judul terbaru</h4></div>`;
  } else {
    grid.innerHTML = sorted.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
}

function renderSavedGrid() {
  const grid = document.getElementById('savedGrid');
  if (!grid) return;

  if (!state.currentUser) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-lock"></i>
        <h4>${t('empty_login_title')}</h4>
        <p>${t('empty_login_desc')}</p>
        <button class="btn-auth btn-auth-signup" style="margin-top: 10px;" onclick="openAuthModal('login')">${t('btn_login_now')}</button>
      </div>
    `;
    return;
  }

  const savedIds = state.currentUser.bookmarks || [];
  const savedTitles = state.titles.filter(item => savedIds.includes(item.id));

  if (savedTitles.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="far fa-heart"></i>
        <h4>${t('empty_saved_title')}</h4>
        <p>${t('empty_saved_desc')}</p>
      </div>
    `;
  } else {
    grid.innerHTML = savedTitles.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
}

// ====== READING HISTORY (Riwayat Baca) RENDER ======
function createHistoryCard(entry, item) {
  const isAnime = item.type.toLowerCase() === 'anime';
  const unitLabel = isAnime ? 'Episode' : 'Chapter';
  const timeAgo = formatRelativeTime(entry.timestamp);
  const fallbackBg = item.color || 'var(--surface-tertiary)';

  const coverHTML = item.coverUrl
    ? `<img src="${item.coverUrl}" alt="${item.title}" onerror="this.style.display='none';this.parentElement.style.background='${fallbackBg}';">`
    : `<div style="width:100%;height:100%;background:${fallbackBg};display:flex;align-items:center;justify-content:center;"><i class="fas ${isAnime ? 'fa-video' : 'fa-book'}" style="color:rgba(255,255,255,0.6);"></i></div>`;

  return `
    <div class="history-card" data-id="${item.id}" data-index="${entry.index}">
      <div class="history-cover">${coverHTML}</div>
      <div class="history-info">
        <h5>${item.title}</h5>
        <span>${unitLabel} ${entry.index} · ${timeAgo}</span>
      </div>
      <button class="history-continue-btn" title="Lanjutkan"><i class="fas fa-play"></i></button>
    </div>
  `;
}

function formatRelativeTime(timestamp) {
  const diffMs = Date.now() - timestamp;
  const diffMin = Math.floor(diffMs / 60000);
  const isEn = state.lang === 'en';
  if (diffMin < 1) return isEn ? "Just now" : "Baru saja";
  if (diffMin < 60) return isEn ? `${diffMin}m ago` : `${diffMin} menit lalu`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return isEn ? `${diffHour}h ago` : `${diffHour} jam lalu`;
  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 30) return isEn ? `${diffDay}d ago` : `${diffDay} hari lalu`;
  return new Date(timestamp).toLocaleDateString(isEn ? 'en-US' : 'id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderHistoryGrid() {
  const grid = document.getElementById('historyGrid');
  if (!grid) return;

  if (!state.currentUser) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-lock"></i>
        <h4>${t('empty_login_title')}</h4>
        <p>${t('empty_login_desc')}</p>
        <button class="btn-auth btn-auth-signup" style="margin-top: 10px;" onclick="openAuthModal('login')">${t('btn_login_now')}</button>
      </div>
    `;
    return;
  }

  const history = state.getHistory();
  if (history.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-history"></i>
        <h4>${t('empty_history_title')}</h4>
        <p>${t('empty_history_desc')}</p>
      </div>
    `;
    return;
  }

  const cardsHTML = history.map(entry => {
    const item = state.titles.find(t2 => t2.id === entry.id);
    if (!item) return '';
    return createHistoryCard(entry, item);
  }).filter(Boolean).join('');

  grid.innerHTML = cardsHTML || `<div class="empty-state"><i class="fas fa-history"></i><h4>${t('empty_history_title')}</h4></div>`;

  // Bind click-to-continue
  grid.querySelectorAll('.history-card').forEach(card => {
    card.addEventListener('click', function() {
      const id = this.dataset.id;
      const index = parseInt(this.dataset.index);
      const item = state.titles.find(t2 => t2.id === id);
      if (!item) return;
      if (item.type.toLowerCase() === 'anime') {
        openAnimeComingSoon(item, index);
      } else {
        openReader(id, index);
      }
    });
  });
}

function renderCategoryGrid(category) {
  const grid = document.getElementById('categoryGrid');
  const breadcrumbCategory = document.getElementById('breadcrumbCategory');
  const categoryHeaderTitle = document.getElementById('categoryHeaderTitle');
  if (!grid) return;

  breadcrumbCategory.textContent = category;
  categoryHeaderTitle.innerHTML = `<i class="fas fa-book-open" style="color: var(--accent-gold);"></i> Semua ${category}`;

  const filtered = state.titles.filter(item => item.type.toLowerCase() === category.toLowerCase());

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-folder-open"></i><h4>${state.lang === 'en' ? 'Empty Category' : 'Kategori Kosong'}</h4></div>`;
  } else {
    grid.innerHTML = filtered.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
}

// Mengambil daftar genre unik dari seluruh judul untuk membangun chip filter
function getAllGenres() {
  const set = new Set();
  state.titles.forEach(item => {
    (item.genre || []).forEach(g => set.add(g));
  });
  return Array.from(set).sort();
}

// Menggambar ulang chip genre pada panel filter lanjutan
function renderGenreFilterChips() {
  const container = document.getElementById('filterGenreChips');
  if (!container) return;
  const genres = getAllGenres();
  container.innerHTML = genres.map(g => `
    <button type="button" class="genre-filter-chip ${state.searchFilters.genres.includes(g) ? 'active' : ''}" data-genre="${g}">${translateGenre(g)}</button>
  `).join('');

  container.querySelectorAll('.genre-filter-chip').forEach(chip => {
    chip.addEventListener('click', function() {
      const genre = this.dataset.genre;
      const idx = state.searchFilters.genres.indexOf(genre);
      if (idx === -1) {
        state.searchFilters.genres.push(genre);
      } else {
        state.searchFilters.genres.splice(idx, 1);
      }
      this.classList.toggle('active');
      renderSearchGrid();
    });
  });
}

function renderSearchGrid() {
  const grid = document.getElementById('searchResultsGrid');
  const query = state.searchQuery.trim();
  const searchStateDesc = document.getElementById('searchStateDesc');
  const filters = state.searchFilters;
  const hasActiveFilters = filters.genres.length > 0 || filters.status !== 'all' || filters.format !== 'all' || !!filters.author;

  if (!grid) return;

  // Author filter badge
  const authorBadge = document.getElementById('authorFilterBadge');
  if (authorBadge) {
    if (filters.author) {
      authorBadge.style.display = 'inline-block';
      authorBadge.innerHTML = `<i class="fas fa-user-edit"></i> ${t('author_label')} ${filters.author}`;
    } else {
      authorBadge.style.display = 'none';
    }
  }

  if (!query && !hasActiveFilters) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h4>${t('empty_search_title')}</h4>
        <p>${t('empty_search_desc')}</p>
      </div>
    `;
    searchStateDesc.textContent = "";
    return;
  }

  let results = state.titles.filter(item => {
    const matchesQuery = !query || item.title.toLowerCase().includes(query.toLowerCase());
    const matchesAuthor = !filters.author || (item.author && item.author.toLowerCase() === filters.author.toLowerCase());
    const matchesFormat = filters.format === 'all' || item.type.toLowerCase() === filters.format.toLowerCase();
    const matchesStatus = filters.status === 'all' || item.status === filters.status;
    const matchesGenre = filters.genres.length === 0 || (item.genre && filters.genres.every(g => item.genre.includes(g)));
    return matchesQuery && matchesAuthor && matchesFormat && matchesStatus && matchesGenre;
  });

  // Sorting
  switch (filters.sort) {
    case 'rating_desc': results.sort((a, b) => b.rating - a.rating); break;
    case 'latest': results.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); break;
    case 'popular': results.sort((a, b) => b.views - a.views); break;
    case 'title_asc': results.sort((a, b) => a.title.localeCompare(b.title)); break;
    default: break; // relevance = urutan hasil pencocokan asli
  }

  const descLabel = state.lang === 'en' ? `Showing ${results.length} results` : `Menampilkan ${results.length} hasil`;
  searchStateDesc.textContent = query ? `${descLabel} untuk "${query}"` : descLabel;

  if (results.length === 0) {
    const notFoundTitle = state.lang === 'en' ? 'No Results Found' : 'Tidak Ada Hasil';
    const notFoundDesc = state.lang === 'en' ? 'We could not find any titles matching your filters.' : 'Maaf, kami tidak menemukan judul yang cocok dengan filter Anda.';
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search-minus"></i>
        <h4>${notFoundTitle}</h4>
        <p>${notFoundDesc}</p>
      </div>
    `;
  } else {
    grid.innerHTML = results.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
}

// Membuka tampilan pencarian dengan filter genre atau penulis yang sudah diisi (dipicu dari detail modal)
function searchByGenre(genre) {
  document.getElementById('detailsModal').classList.remove('active');
  state.searchQuery = "";
  state.searchFilters = { genres: [genre], status: 'all', format: 'all', sort: 'relevance', author: null };
  document.getElementById('searchQueryInput').value = "";
  const panel = document.getElementById('advancedSearchPanel');
  if (panel) panel.classList.add('show');
  switchView('search');
  renderGenreFilterChips();
}

function searchByAuthor(author) {
  document.getElementById('detailsModal').classList.remove('active');
  state.searchQuery = "";
  state.searchFilters = { genres: [], status: 'all', format: 'all', sort: 'relevance', author };
  document.getElementById('searchQueryInput').value = "";
  const panel = document.getElementById('advancedSearchPanel');
  if (panel) panel.classList.add('show');
  switchView('search');
  renderGenreFilterChips();
}

// ====== CARD CLICKS / EVENT REGISTRATION ======
function attachCardEvents() {
  // Bookmark Toggle
  document.querySelectorAll('.btn-bookmark-float').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation(); // Avoid opening detail modal
      const id = this.dataset.id;
      const res = state.toggleBookmark(id);
      
      if (!res.success) {
        showToast(res.message, true);
        openAuthModal('login');
      } else {
        const icon = this.querySelector('i');
        if (res.bookmarked) {
          this.classList.add('active');
          icon.className = 'fas fa-heart';
          showToast(t('toast_bookmark_added'));
        } else {
          this.classList.remove('active');
          icon.className = 'far fa-heart';
          showToast(t('toast_bookmark_removed'));
        }

        // Re-render conditional grids if active
        if (state.activeView === 'saved') renderSavedGrid();
        if (state.activeView === 'explore') renderExploreGrids();
      }
    });
  });

  // Card click -> Open Details
  document.querySelectorAll('.manga-card').forEach(card => {
    card.addEventListener('click', function() {
      const id = this.dataset.id;
      openDetailsModal(id);
    });
  });
}

// ====== DETAIL VIEWER MODAL ======
let currentDetailItemId = null;

function openDetailsModal(id) {
  const item = state.titles.find(t2 => t2.id === id);
  if (!item) return;
  currentDetailItemId = id;

  const overlay = document.getElementById('detailsModal');
  const isAnime = item.type.toLowerCase() === 'anime';
  const unitLabel = isAnime ? (state.lang === 'en' ? 'Episode' : 'Episode') : (state.lang === 'en' ? 'Chapter' : 'Chapter');

  // Show/hide Watch Anime button
  const watchBtn = document.getElementById('detailWatchAnimeBtn');
  if (watchBtn) {
    watchBtn.style.display = isAnime ? 'inline-flex' : 'none';
    watchBtn.innerHTML = `<i class="fas fa-play-circle"></i> ${t('btn_watch_anime')}`;
    watchBtn.onclick = () => {
      overlay.classList.remove('active');
      openAnimeComingSoon(item);
    };
  }

  // Modal elements
  const hero = overlay.querySelector('.detail-header-hero');
  const imgContainer = overlay.querySelector('.detail-cover');
  const title = overlay.querySelector('.detail-header-info h2');
  const tagsContainer = overlay.querySelector('.detail-info-tags');
  const authorRow = overlay.querySelector('#detailAuthorRow');
  const genreList = overlay.querySelector('#detailGenreList');
  const metaVal1 = overlay.querySelector('#detailMetaVal1');
  const metaVal2 = overlay.querySelector('#detailMetaVal2');
  const metaVal3 = overlay.querySelector('#detailMetaVal3');
  const desc = overlay.querySelector('.detail-description-text');
  const readBtn = overlay.querySelector('.btn-detail-read');
  const bookmarkBtn = overlay.querySelector('.btn-detail-bookmark');
  const chaptersContainer = overlay.querySelector('#detailChaptersList');

  // Background and Cover
  const fallbackBg = item.color || 'var(--surface-tertiary)';
  if (item.coverUrl) {
    hero.style.backgroundImage = `url('${item.coverUrl}')`;
    imgContainer.innerHTML = `
      <img
        src="${item.coverUrl}"
        alt="${item.title}"
        style="width:100%;height:100%;object-fit:cover;border-radius:12px;"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      >
      <div class="card-img-placeholder" style="display:none;background:${fallbackBg};width:100%;height:100%;">
        <i class="fas fa-book"></i>
      </div>
    `;
  } else {
    hero.style.backgroundImage = '';
    hero.style.background = fallbackBg;
    imgContainer.innerHTML = `
      <div class="card-img-placeholder" style="background:${fallbackBg};width:100%;height:100%;">
        <i class="fas fa-book"></i>
      </div>
    `;
  }

  title.textContent = item.title;

  // Tags
  const statusLabel = translateStatus(item.status);
  tagsContainer.innerHTML = `
    <span class="detail-tag" style="background: var(--accent-coral);">${item.type}</span>
    <span class="detail-tag">${statusLabel}</span>
    <span class="detail-tag"><i class="fas fa-eye"></i> ${item.views.toLocaleString()}</span>
  `;

  // Author (clickable)
  if (authorRow) {
    if (item.author) {
      authorRow.innerHTML = `<button type="button" class="author-link" data-author="${item.author}"><i class="fas fa-feather-alt"></i> ${t('author_label')} ${item.author}</button>`;
      const authorBtn = authorRow.querySelector('.author-link');
      if (authorBtn) authorBtn.onclick = () => searchByAuthor(item.author);
    } else {
      authorRow.innerHTML = '';
    }
  }

  // Genre chips (clickable)
  if (genreList) {
    const genres = item.genre || [];
    genreList.innerHTML = genres.map(g => `<button type="button" class="genre-chip" data-genre="${g}">${translateGenre(g)}</button>`).join('');
    genreList.querySelectorAll('.genre-chip').forEach(chip => {
      chip.onclick = () => searchByGenre(chip.dataset.genre);
    });
  }

  const totalCount = isAnime ? (item.episodes || 0) : getChapterCount(item);
  const latestChapter = isAnime ? totalCount : getLatestChapter(item);

  // Meta grid
  metaVal1.innerHTML = `<i class="fas fa-star"></i> ${item.rating}`;
  metaVal2.textContent = `${totalCount} ${unitLabel}`;
  metaVal3.textContent = statusLabel;

  desc.textContent = getLocalizedDesc(item);

  // Action buttons — sembunyikan "Mulai Membaca" untuk konten Anime
  readBtn.style.display = isAnime ? 'none' : 'inline-flex';
  readBtn.innerHTML = `<i class="fas fa-book-open"></i> ${t('btn_start_reading')}`;
  readBtn.onclick = () => {
    overlay.classList.remove('active');
    openReader(item.id, latestChapter);
  };

  // Bookmark active state
  updateDetailBookmarkBtn(bookmarkBtn, item.id);
  bookmarkBtn.onclick = () => {
    const res = state.toggleBookmark(item.id);
    if (!res.success) {
      overlay.classList.remove('active');
      showToast(res.message, true);
      openAuthModal('login');
    } else {
      updateDetailBookmarkBtn(bookmarkBtn, item.id);
      showToast(res.bookmarked ? t('toast_bookmark_added') : t('toast_bookmark_removed'));
      
      // Sync grids
      if (state.activeView === 'saved') renderSavedGrid();
      if (state.activeView === 'explore') renderExploreGrids();
    }
  };

  // Generate daftar chapter (manga/manhwa/manhua) ATAU daftar episode (anime)
  let chaptersHTML = '';
  
  // Tampilkan SEMUA chapter/episode dari yang terbaru sampai chapter 1
  for (let i = totalCount; i >= 1; i--) {
    const pubDate = new Date(new Date(item.dateAdded).getTime() - ((totalCount - i) * 24 * 60 * 60 * 1000)).toLocaleDateString(state.lang === 'en' ? 'en-US' : 'id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

    const clickAction = isAnime
      ? `event.preventDefault(); document.getElementById('detailsModal').classList.remove('active'); openAnimeComingSoon(state.titles.find(t2 => t2.id === '${item.id}'), ${i});`
      : `event.preventDefault(); document.getElementById('detailsModal').classList.remove('active'); openReader('${item.id}', ${i});`;

    chaptersHTML += `
      <a href="#" class="chapter-item" onclick="${clickAction}">
        <div class="chapter-left">
          <span class="chapter-title">${unitLabel} ${i}</span>
          <span class="chapter-date">${state.lang === 'en' ? 'Released' : 'Rilis'}: ${pubDate}</span>
        </div>
        <div class="chapter-right">
          <i class="fas ${isAnime ? 'fa-play-circle' : 'fa-chevron-right'}"></i>
        </div>
      </a>
    `;
  }
  chaptersContainer.innerHTML = chaptersHTML || `<p style="font-size:0.85rem;color:var(--text-tertiary);text-align:center;padding:1rem;">${state.lang === 'en' ? 'No chapters available.' : 'Tidak ada chapter yang tersedia.'}</p>`;

  // Activate modal
  overlay.classList.add('active');
}

function updateDetailBookmarkBtn(btn, titleId) {
  const isSaved = state.isBookmarked(titleId);
  if (isSaved) {
    btn.classList.add('active');
    btn.innerHTML = '<i class="fas fa-heart"></i> Saved';
  } else {
    btn.classList.remove('active');
    btn.innerHTML = '<i class="far fa-heart"></i> Save';
  }
}

// ====== READER / WATCHER ENGINE STATE ======
let readerActiveItem = null;
let readerActiveIndex = 1; // Chapter or Episode number
let mangaLayoutMode = 'scroll'; // 'scroll' or 'page'
let mangaActivePage = 0; // Page index in page mode
const MANGA_PAGE_COUNT = 4; // Mock page count per chapter
let animePlayState = false;
let animeCurrentTimeVal = 0;
const ANIME_TOTAL_TIME = 1440; // 24 minutes in seconds
let animePlaybackInterval = null;
let animeSpeed = 1.0;
let animeQuality = '1080p';
let ambientGlowOn = true;
let videoCanvasContext = null;
let videoCanvasAnimId = null;
let canvasDrawPhase = 0;

function openReader(itemId, index) {
  const item = state.titles.find(t => t.id === itemId);
  if (!item) return;

  readerActiveItem = item;
  readerActiveIndex = index;

  const overlay = document.getElementById('readerModal');

  // Set Title and Subtitle
  document.getElementById('readerTitle').textContent = item.title;
  document.getElementById('readerSubtitle').textContent = `Chapter ${index}`;

  // Toggle Mode Groups
  const mangaControls = document.getElementById('mangaControls');
  const animeControls = document.getElementById('animeControls');
  const mangaContentArea = document.getElementById('mangaContentArea');
  const readerFooter = document.getElementById('readerFooter');

  if (mangaControls) mangaControls.style.display = 'flex';
  if (animeControls) animeControls.style.display = 'none';
  if (mangaContentArea) mangaContentArea.classList.add('active');
  if (readerFooter) readerFooter.style.display = 'flex';

  // Setup Manga Reader
  mangaActivePage = 0;
  initMangaReader();

  // Populate Chapter dropdown
  populateReaderDropdown();

  // Show Modal
  overlay.classList.add('active');
  
  // Update view count
  item.views += Math.floor(Math.random() * 5) + 1;
  state.saveTitles();

  // Catat ke riwayat baca jika user login
  if (state.currentUser) {
    state.addHistory(item.id, index);
  }
}

function closeReader() {
  const overlay = document.getElementById('readerModal');
  overlay.classList.remove('active');
  
  readerActiveItem = null;
}

// ====== CHAPTER LIST HELPERS ======
// Mendukung 2 format field "chapters" pada data manga:
// 1) ANGKA (lama)  -> chapters: 1102        artinya chapter 1..1102 dianggap ada
// 2) ARRAY (baru)  -> chapters: [1, 2]      artinya cuma chapter 1 & 2 yang benar-benar ada
function getChapterList(item) {
  const ch = item.chapters;
  if (Array.isArray(ch)) {
    return ch.slice().sort((a, b) => a - b);
  }
  const n = ch || item.episodes || 0;
  return Array.from({ length: n }, (_, i) => i + 1);
}
// Jumlah chapter (buat ditampilkan di card, mis. "2 ch")
function getChapterCount(item) {
  return Array.isArray(item.chapters) ? item.chapters.length : (item.chapters || item.episodes || 0);
}
// Chapter terakhir/terbaru (buat dibuka pas klik "Mulai Membaca")
function getLatestChapter(item) {
  const list = getChapterList(item);
  return list.length > 0 ? list[list.length - 1] : 1;
}

// ====== MANGA READER LOGIC ======
function initMangaReader() {
  const container = document.getElementById('mangaContentArea');
  const scrollBtn = document.getElementById('modeScrollBtn');
  const pageBtn = document.getElementById('modePageBtn');

  // Set active visual state for buttons
  if (mangaLayoutMode === 'scroll') {
    scrollBtn.classList.add('active');
    pageBtn.classList.remove('active');
    container.className = 'reader-view-panel scroll-mode active';
  } else {
    scrollBtn.classList.remove('active');
    pageBtn.classList.add('active');
    container.className = 'reader-view-panel page-mode active';
  }

  renderMangaPages();
}

// Ambil array gambar untuk chapter yang sedang dibuka.
// Mendukung 2 format:
// 1) chapterImages sebagai OBJECT per-nomor-chapter -> { 1102: [...], 1101: [...] }
// 2) chapterImages sebagai ARRAY biasa (dipakai sama untuk semua chapter, mode lama)
// Kalau tidak ada data sama sekali, fallback ke coverUrl.
function getCurrentChapterImages() {
  const ci = readerActiveItem.chapterImages;
  if (ci) {
    if (Array.isArray(ci) && ci.length > 0) return ci;
    if (!Array.isArray(ci) && ci[readerActiveIndex] && ci[readerActiveIndex].length > 0) {
      return ci[readerActiveIndex];
    }
  }
  return [readerActiveItem.coverUrl || ''];
}

// Render chapter pages using real image URLs
function renderMangaPages() {
  const container = document.getElementById('mangaContentArea');
  const isScroll = mangaLayoutMode === 'scroll';

  // Get chapter images array — fall back to cover image or placeholder
  const images = getCurrentChapterImages();

  if (isScroll) {
    // Webtoon scroll: all images stacked vertically
    let pagesHTML = `<div class="reader-scroll-header"><span>${readerActiveItem.title}</span><span>Chapter ${readerActiveIndex}</span></div>`;
    images.forEach((src, i) => {
      pagesHTML += createMangaImageHTML(src, i + 1, images.length);
    });
    pagesHTML += `<div class="reader-chapter-end"><i class="fas fa-check-circle"></i><p>Chapter ${readerActiveIndex} ${state.lang === 'en' ? 'Complete' : 'Selesai'}</p></div>`;
    container.innerHTML = pagesHTML;
  } else {
    // Single page mode
    const src = images[mangaActivePage % images.length];
    container.innerHTML = `
      <div class="manga-page-navigation">
        <button class="btn-manga-nav" id="mangaPrevBtn" ${mangaActivePage === 0 ? 'disabled' : ''} onclick="changeMangaPage(-1)">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn-manga-nav" id="mangaNextBtn" ${mangaActivePage === images.length - 1 ? 'disabled' : ''} onclick="changeMangaPage(1)">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      ${createMangaImageHTML(src, mangaActivePage + 1, images.length)}
      <div class="manga-page-indicators">
        Halaman <span>${mangaActivePage + 1}</span> / ${images.length}
      </div>
    `;
  }
}

function createMangaImageHTML(src, pageNum, total) {
  if (!src) {
    return `<div class="manga-img-page manga-img-placeholder"><i class="fas fa-image"></i><p>Gambar tidak tersedia</p></div>`;
  }
  return `
    <div class="manga-img-page">
      <img
        src="${src}"
        alt="Page ${pageNum}"
        class="manga-page-img"
        loading="lazy"
        onerror="this.parentElement.innerHTML='<div class=\'manga-img-placeholder\'><i class=\'fas fa-image\'></i><p>Gagal memuat gambar</p></div>'"
      />
    </div>
  `;
}

// ====== UNDUH GAMBAR (Download Image Feature) ======
async function downloadImage(url, filename) {
  try {
    const resp = await fetch(url, { mode: 'cors' });
    if (!resp.ok) throw new Error('Fetch gagal');
    const blob = await resp.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
    showToast(`⬇️ ${filename} ${t('toast_download_done')}`);
  } catch (err) {
    // Fallback jika gambar cross-origin tidak mengizinkan fetch (CORS)
    window.open(url, '_blank');
    showToast(t('toast_download_fail'), true);
  }
}

// Unduh seluruh halaman pada chapter yang sedang dibuka (dengan jeda agar tidak diblokir browser)
async function downloadCurrentChapter() {
  if (!readerActiveItem) return;
  const images = getCurrentChapterImages();

  if (images.length === 0 || !images[0]) {
    showToast(t('toast_download_none'), true);
    return;
  }

  showToast(`⬇️ ${t('toast_downloading')} ${images.length} ${state.lang === 'en' ? 'pages' : 'halaman'}...`);
  const safeTitle = readerActiveItem.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();

  for (let i = 0; i < images.length; i++) {
    const filename = `${safeTitle}-ch${readerActiveIndex}-hal${i + 1}.jpg`;
    await downloadImage(images[i], filename);
    await new Promise(res => setTimeout(res, 400));
  }
}

function changeMangaPage(direction) {
  const images = getCurrentChapterImages();
  const newPage = mangaActivePage + direction;
  if (newPage >= 0 && newPage < images.length) {
    mangaActivePage = newPage;
    renderMangaPages();
    document.getElementById('mangaContentArea').scrollTop = 0;
  }
}

// ====== DROPDOWNS & NAV CONTROLS ======
function populateReaderDropdown() {
  const isAnime = readerActiveItem.type && readerActiveItem.type.toLowerCase() === 'anime';
  const list = isAnime
    ? Array.from({ length: readerActiveItem.episodes || 0 }, (_, i) => i + 1)
    : getChapterList(readerActiveItem);
  const select = document.getElementById('readerChapterSelector');

  if (!select) return;

  let optionsHTML = '';
  list.forEach((i) => {
    const isSelected = i === readerActiveIndex ? 'selected' : '';
    optionsHTML += `<option value="${i}" ${isSelected}>Chapter ${i}</option>`;
  });
  select.innerHTML = optionsHTML;

  // Handle dropdown select change
  select.onchange = function() {
    openReader(readerActiveItem.id, parseInt(this.value));
  };

  // Posisi chapter sekarang di dalam daftar (buat cari chapter sebelum/sesudahnya)
  const posIndex = list.indexOf(readerActiveIndex);

  // Setup header/footer chapter controls disabled states
  const prevBtn = document.getElementById('prevChapBtn');
  const nextBtn = document.getElementById('nextChapBtn');

  if (prevBtn) {
    if (posIndex <= 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
      prevBtn.onclick = () => openReader(readerActiveItem.id, list[posIndex - 1]);
    }
  }

  if (nextBtn) {
    if (posIndex === -1 || posIndex >= list.length - 1) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
      nextBtn.onclick = () => openReader(readerActiveItem.id, list[posIndex + 1]);
    }
  }
}

// ====== ANIME COMING SOON ======
function openAnimeComingSoon(item, episodeNum = null) {
  const modal = document.getElementById('animeComingSoonModal');
  const titleEl = document.getElementById('animeCSTitle');
  const epEl = document.getElementById('animeCSEpisode');

  if (titleEl) titleEl.textContent = item.title;
  if (epEl) {
    epEl.textContent = episodeNum
      ? `Episode ${episodeNum} of ${item.episodes}`
      : `${item.episodes} Episode · ${item.type}`;
  }

  // Catat ke riwayat baca jika user login
  if (state.currentUser) {
    state.addHistory(item.id, episodeNum || 1);
  }

  modal.classList.add('active');
}


function openAuthModal(mode = 'login') {
  const modal = document.getElementById('authModal');
  modal.classList.add('active');
  switchAuthTab(mode);
}

function switchAuthTab(mode) {
  const loginTab = document.getElementById('tabLogin');
  const signupTab = document.getElementById('tabSignup');
  const loginPanel = document.getElementById('panelLogin');
  const signupPanel = document.getElementById('panelSignup');

  if (mode === 'login') {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginPanel.classList.add('active');
    signupPanel.classList.remove('active');
  } else {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupPanel.classList.add('active');
    loginPanel.classList.remove('active');
  }
}

function updateAuthUI() {
  const authBlock = document.getElementById('authBlock');
  const user = state.currentUser;
  
  if (user) {
    authBlock.innerHTML = `
      <div class="user-profile-badge" id="profileBadge">
        <img src="${user.avatar}" alt="Avatar">
        <span>${user.name}</span>
      </div>
    `;
    // Attach logout menu popup trigger or action
    document.getElementById('profileBadge').addEventListener('click', () => {
      if (confirm(`Halo, ${user.name}!\nApakah Anda ingin keluar (Log Out)?`)) {
        state.logout();
        updateAuthUI();
        showToast(t('toast_logout'));
        if (state.activeView === 'saved') {
          switchView('explore');
        } else {
          renderExploreGrids();
        }
      }
    });
  } else {
    authBlock.innerHTML = `
      <button class="btn-auth btn-auth-login" onclick="openAuthModal('login')"><i class="fas fa-user"></i> Log In</button>
      <button class="btn-auth btn-auth-signup" onclick="openAuthModal('signup')">Sign Up</button>
    `;
  }
}

// ====== SIMULATED GOOGLE AUTH (removed per request) ======

// ====== UPLOAD IMAGES / GRADIENTS ======
let selectedUploadCoverGradient = "linear-gradient(135deg, #1e3a8a, #3b82f6)";
let uploadedCoverDataUrl = null;

function setupUploadPageControls() {
  const fileInput = document.getElementById('uploadFile');
  const coverPreview = document.getElementById('coverPreview');
  const coverUrlInput = document.getElementById('uploadCoverUrl'); // Field URL
  const presetGradients = document.querySelectorAll('.gradient-preset');

  // Live preview saat URL diketik
  if (coverUrlInput) {
    coverUrlInput.addEventListener('input', function() {
      const url = this.value.trim();
      if (url) {
        uploadedCoverDataUrl = null;
        if (fileInput) fileInput.value = "";
        presetGradients.forEach(g => g.classList.remove('selected'));

        const testImg = new Image();
        testImg.onload = function() {
          coverPreview.innerHTML = `<img src="${url}" alt="Preview Cover" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;
        };
        testImg.onerror = function() {
          coverPreview.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--accent-coral);">
              <i class="fas fa-exclamation-triangle" style="font-size:1.5rem;"></i>
              <small>URL tidak valid atau gambar tidak bisa dimuat</small>
            </div>
          `;
        };
        testImg.src = url;
      } else {
        coverPreview.innerHTML = `<i class="fas fa-cloud-upload-alt"></i><span>Pilih Cover</span>`;
      }
    });
  }
  
  // File upload cover reader
  if (fileInput) {
    fileInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        if (coverUrlInput) coverUrlInput.value = "";
        const reader = new FileReader();
        reader.onload = function(e) {
          uploadedCoverDataUrl = e.target.result;
          coverPreview.innerHTML = `<img src="${uploadedCoverDataUrl}" alt="Preview Cover">`;
          presetGradients.forEach(g => g.classList.remove('selected'));
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Preset gradient selection
  presetGradients.forEach(preset => {
    preset.addEventListener('click', function() {
      presetGradients.forEach(g => g.classList.remove('selected'));
      this.classList.add('selected');
      
      const style = window.getComputedStyle(this);
      selectedUploadCoverGradient = style.backgroundImage;
      uploadedCoverDataUrl = null;
      if (fileInput) fileInput.value = "";
      if (coverUrlInput) coverUrlInput.value = "";
      
      coverPreview.innerHTML = `
        <div style="background: ${selectedUploadCoverGradient}; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.7);">
          <i class="fas fa-image" style="font-size: 2rem;"></i>
        </div>
      `;
    });
  });

  // Form submission
  const uploadForm = document.getElementById('uploadForm');
  if (uploadForm) {
    uploadForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (!state.currentUser) {
        showToast(t('toast_upload_login_required'), true);
        openAuthModal('login');
        return;
      }

      const titleVal = document.getElementById('uploadTitle').value.trim();
      const typeVal = document.getElementById('uploadType').value;
      const chaptersVal = document.getElementById('uploadChapters').value;
      const ratingVal = document.getElementById('uploadRating').value;
      const descVal = document.getElementById('uploadDescription').value.trim();
      const coverUrlVal = coverUrlInput ? coverUrlInput.value.trim() : "";
      const authorVal = document.getElementById('uploadAuthor') ? document.getElementById('uploadAuthor').value.trim() : "";
      const genreRaw = document.getElementById('uploadGenre') ? document.getElementById('uploadGenre').value.trim() : "";
      const genreVal = genreRaw ? genreRaw.split(',').map(g => g.trim()).filter(Boolean) : [];

      if (!titleVal || !chaptersVal || !ratingVal) {
        showToast(t('toast_upload_required_fields'), true);
        return;
      }

      // PRIORITAS: URL input > base64 file > gradient
      let finalCoverUrl = null;
      if (coverUrlVal) {
        finalCoverUrl = coverUrlVal;
      } else if (uploadedCoverDataUrl) {
        finalCoverUrl = uploadedCoverDataUrl;
      }

      // Add to state list
      const newItem = state.addTitle(
        titleVal,
        typeVal,
        ratingVal,
        chaptersVal,
        descVal,
        finalCoverUrl,
        selectedUploadCoverGradient,
        authorVal,
        genreVal
      );

      showToast(`🎉 ${t('toast_upload_success')} ${typeVal}: "${newItem.title}"!`);
      
      // Reset form
      uploadForm.reset();
      uploadedCoverDataUrl = null;
      if (coverUrlInput) coverUrlInput.value = "";
      coverPreview.innerHTML = `<i class="fas fa-cloud-upload-alt"></i><span>Pilih Cover</span>`;
      
      // Redirect to home/explore
      switchView('explore');
    });
  }
}


// ====== DYNAMIC FAVICON GENERATOR ======
function generateDynamicFavicon() {
  const canvas = document.createElement('canvas');
  canvas.width = 192;
  canvas.height = 192;
  const ctx = canvas.getContext('2d');
  
  // Draw circular gold gradient background
  const grad = ctx.createRadialGradient(96, 96, 20, 96, 96, 96);
  grad.addColorStop(0, '#f7d875');
  grad.addColorStop(1, '#c99f2b');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(96, 96, 90, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.strokeStyle = '#b8860b';
  ctx.lineWidth = 6;
  ctx.stroke();

  // Draw text '福'
  ctx.fillStyle = '#2d1f04';
  ctx.font = 'bold 110px "Segoe UI", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('福', 96, 96);
  
  const iconUrl = canvas.toDataURL('image/png');
  
  // Replace links
  document.querySelectorAll("link[rel*='icon'], link[rel='apple-touch-icon']").forEach(link => {
    link.href = iconUrl;
  });
}

// ====== INITIALIZE EVENT HANDLERS ======
document.addEventListener('DOMContentLoaded', () => {
  // Setup standard navigation click bindings
  document.querySelectorAll('[data-view-btn]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const view = this.dataset.viewBtn;
      const category = this.dataset.category;
      
      if (category) {
        switchView('category-view', { category });
      } else {
        switchView(view);
      }
    });
  });

  // Top header search binds (transfers views to Search and sets query)
  const headerSearchInput = document.getElementById('headerSearchInput');
  if (headerSearchInput) {
    headerSearchInput.addEventListener('input', function() {
      state.searchQuery = this.value;
      
      if (state.activeView !== 'search' && this.value.trim() !== "") {
        // Shift context to search panel
        switchView('search');
        const mainSearch = document.getElementById('searchQueryInput');
        if (mainSearch) {
          mainSearch.value = this.value;
        }
      } else if (state.activeView === 'search') {
        const mainSearch = document.getElementById('searchQueryInput');
        if (mainSearch) {
          mainSearch.value = this.value;
        }
        renderSearchGrid();
      }
    });
  }

  // Dedicated search page input binds
  const searchQueryInput = document.getElementById('searchQueryInput');
  if (searchQueryInput) {
    searchQueryInput.addEventListener('input', function() {
      state.searchQuery = this.value;
      if (headerSearchInput) {
        headerSearchInput.value = this.value;
      }
      renderSearchGrid();
    });
  }

  // ====== ADVANCED SEARCH FILTER BINDINGS ======
  const toggleAdvBtn = document.getElementById('toggleAdvancedSearchBtn');
  const advPanel = document.getElementById('advancedSearchPanel');
  if (toggleAdvBtn && advPanel) {
    toggleAdvBtn.addEventListener('click', () => {
      advPanel.classList.toggle('show');
      toggleAdvBtn.classList.toggle('active');
    });
  }

  const filterFormatEl = document.getElementById('filterFormat');
  if (filterFormatEl) {
    filterFormatEl.addEventListener('change', function() {
      state.searchFilters.format = this.value;
      renderSearchGrid();
    });
  }

  const filterStatusEl = document.getElementById('filterStatus');
  if (filterStatusEl) {
    filterStatusEl.addEventListener('change', function() {
      state.searchFilters.status = this.value;
      renderSearchGrid();
    });
  }

  const filterSortEl = document.getElementById('filterSort');
  if (filterSortEl) {
    filterSortEl.addEventListener('change', function() {
      state.searchFilters.sort = this.value;
      renderSearchGrid();
    });
  }

  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      state.searchFilters = { genres: [], status: 'all', format: 'all', sort: 'relevance', author: null };
      if (filterFormatEl) filterFormatEl.value = 'all';
      if (filterStatusEl) filterStatusEl.value = 'all';
      if (filterSortEl) filterSortEl.value = 'relevance';
      renderGenreFilterChips();
      renderSearchGrid();
    });
  }

  renderGenreFilterChips();

  // ====== NOW TRENDING CAROUSEL NAV ======
  const trendingTrack = document.getElementById('trendingTrack');
  const trendingPrevBtn = document.getElementById('trendingPrevBtn');
  const trendingNextBtn = document.getElementById('trendingNextBtn');
  if (trendingTrack && trendingPrevBtn && trendingNextBtn) {
    trendingPrevBtn.addEventListener('click', () => trendingTrack.scrollBy({ left: -420, behavior: 'smooth' }));
    trendingNextBtn.addEventListener('click', () => trendingTrack.scrollBy({ left: 420, behavior: 'smooth' }));
  }

  // ====== LIBRARY TABS (Favorit / Riwayat) ======
  document.querySelectorAll('.lib-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.lib-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.lib-panel').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      const panelId = this.dataset.libPanel;
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.add('active');
    });
  });

  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      if (!state.currentUser) return;
      state.clearHistory();
      renderHistoryGrid();
      showToast(t('toast_history_cleared'));
    });
  }

  // ====== THEME TOGGLE (Dark/Light) ======
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem('kagami_theme', theme);
    document.body.classList.toggle('light-theme', theme === 'light');
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'light' ? '#f4f5f9' : '#0b0b0f');
  }
  applyTheme(state.theme);
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyTheme(state.theme === 'light' ? 'dark' : 'light');
    });
  }

  // ====== LANGUAGE SWITCHER (ID/EN) ======
  const langSwitcherBtn = document.getElementById('langSwitcherBtn');
  const langMenu = document.getElementById('langMenu');
  if (langSwitcherBtn && langMenu) {
    langSwitcherBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('show');
    });
    document.addEventListener('click', () => langMenu.classList.remove('show'));
    langMenu.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        applyLanguage(opt.dataset.lang);
        langMenu.classList.remove('show');
      });
    });
  }
  applyLanguage(state.lang);

  // Category chip filters click binding (Explore Page)
  document.querySelectorAll('.filter-chips .chip').forEach(chip => {
    chip.addEventListener('click', function() {
      const filter = this.dataset.filter;
      state.activeFilter = filter;
      updateFilterChips();
      renderExploreGrids();
      showToast(`${t('toast_filter_applied')}: ${filter.toUpperCase()}`);
    });
  });

  // Modal closers
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
      }
    });
    
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }
  });

  // Auth Modal Forms
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPassword').value;
      
      const res = state.login(email, pass);
      if (res.success) {
        document.getElementById('authModal').classList.remove('active');
        updateAuthUI();
        showToast(`${t('toast_welcome_back')} ${res.user.name}!`);
        if (state.activeView === 'saved') renderSavedGrid();
        renderExploreGrids();
      } else {
        showToast(`❌ ${res.message}`, true);
      }
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signupEmail').value.trim();
      const name = document.getElementById('signupName').value.trim();
      const pass = document.getElementById('signupPassword').value;
      
      const res = state.addUser(email, name, pass);
      if (res.success) {
        // Automatically log in
        state.login(email, pass);
        document.getElementById('authModal').classList.remove('active');
        updateAuthUI();
        showToast(`${t('toast_signup_success')} ${name}!`);
        renderExploreGrids();
      } else {
        showToast(`❌ ${res.message}`, true);
      }
    });
  }

  // (Login Google dihapus)

  // Details Modal Tab navigations
  document.querySelectorAll('.detail-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.detail-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.detail-panel').forEach(p => p.classList.remove('active'));
      
      this.classList.add('active');
      const targetPanel = document.getElementById(this.dataset.panel);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Setup control points for Uploader Drawer
  setupUploadPageControls();

  // Install PWA banners listeners
  let deferredPrompt;
  const installBanner = document.getElementById('installBanner');
  const installAppBtn = document.getElementById('installAppBtn');
  const closeBannerBtn = document.getElementById('closeBannerBtn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBanner.classList.add('show');
  });

  if (installAppBtn) {
    installAppBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        if (result.outcome === 'accepted') {
          showToast(t('toast_pwa_installed'));
          installBanner.classList.remove('show');
        }
        deferredPrompt = null;
      }
    });
  }

  if (closeBannerBtn) {
    closeBannerBtn.addEventListener('click', () => {
      installBanner.classList.remove('show');
    });
  }

  // ====== BIND READER EVENTS ======
  const closeReaderBtn = document.getElementById('closeReaderBtn');
  if (closeReaderBtn) {
    closeReaderBtn.addEventListener('click', closeReader);
  }

  // Manga Layout modes toggle
  const modeScrollBtn = document.getElementById('modeScrollBtn');
  const modePageBtn = document.getElementById('modePageBtn');

  if (modeScrollBtn && modePageBtn) {
    modeScrollBtn.addEventListener('click', () => {
      mangaLayoutMode = 'scroll';
      initMangaReader();
    });

    modePageBtn.addEventListener('click', () => {
      mangaLayoutMode = 'page';
      initMangaReader();
    });
  }

  // Ambient Glow Toggle
  const ambientGlowBtn = document.getElementById('ambientGlowBtn');
  if (ambientGlowBtn) {
    ambientGlowBtn.addEventListener('click', () => {
      ambientGlowOn = !ambientGlowOn;
      const area = document.getElementById('animeContentArea');
      if (ambientGlowOn) {
        ambientGlowBtn.classList.add('active');
        area.classList.add('ambient-active');
      } else {
        ambientGlowBtn.classList.remove('active');
        area.classList.remove('ambient-active');
      }
    });
  }

  // Video Controls clicks
  const videoPlayPauseBtn = document.getElementById('videoPlayPauseBtn');
  const videoOverlayPlayBtn = document.getElementById('videoOverlayPlayBtn');

  if (videoPlayPauseBtn) videoPlayPauseBtn.addEventListener('click', toggleAnimePlayback);
  if (videoOverlayPlayBtn) videoOverlayPlayBtn.addEventListener('click', toggleAnimePlayback);

  // Volume Slider
  const volumeSlider = document.getElementById('volumeSlider');
  if (volumeSlider) {
    volumeSlider.addEventListener('input', function() {
      handleVolumeSlider(parseInt(this.value));
    });
  }

  // Volume Mute Button toggle
  const videoMuteBtn = document.getElementById('videoMuteBtn');
  let lastVolume = 80;
  if (videoMuteBtn) {
    videoMuteBtn.addEventListener('click', () => {
      const slider = document.getElementById('volumeSlider');
      if (slider) {
        if (parseInt(slider.value) > 0) {
          lastVolume = parseInt(slider.value);
          handleVolumeSlider(0);
        } else {
          handleVolumeSlider(lastVolume);
        }
      }
    });
  }

  // Timeline Scrub
  const timelineEl = document.getElementById('videoTimeline');
  if (timelineEl) {
    const timelineContainer = timelineEl.parentElement;
    if (timelineContainer) {
      timelineContainer.addEventListener('mousedown', function(e) {
        handleTimelineScrub(e);
        
        // Support drag scrub
        const onMouseMove = (moveEvent) => handleTimelineScrub(moveEvent);
        const onMouseUp = () => {
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
        };
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });
    }
  }

  // Dropdown lists: Quality & Speed toggles
  const qualityBtn = document.getElementById('qualityBtn');
  const qualityMenu = document.getElementById('qualityMenu');
  const speedBtn = document.getElementById('speedBtn');
  const speedMenu = document.getElementById('speedMenu');

  if (qualityBtn && qualityMenu) {
    qualityBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      qualityMenu.classList.toggle('show');
      if (speedMenu) speedMenu.classList.remove('show');
    });

    qualityMenu.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        qualityMenu.querySelectorAll('.dropdown-item').forEach(d => d.classList.remove('active'));
        this.classList.add('active');
        animeQuality = this.dataset.quality;
        qualityBtn.textContent = animeQuality;
        qualityMenu.classList.remove('show');
        showToast(`Resolusi diubah ke: ${animeQuality}`);
      });
    });
  }

  if (speedBtn && speedMenu) {
    speedBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speedMenu.classList.toggle('show');
      if (qualityMenu) qualityMenu.classList.remove('show');
    });

    speedMenu.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        speedMenu.querySelectorAll('.dropdown-item').forEach(d => d.classList.remove('active'));
        this.classList.add('active');
        animeSpeed = parseFloat(this.dataset.speed);
        if (videoElement) videoElement.playbackRate = animeSpeed;
        speedBtn.textContent = `${animeSpeed.toFixed(1)}x`;
        speedMenu.classList.remove('show');
        showToast(`Kecepatan putar diubah ke: ${animeSpeed}x`);
      });
    });
  }

  // Click outside to close dropdowns
  window.addEventListener('click', () => {
    if (qualityMenu) qualityMenu.classList.remove('show');
    if (speedMenu) speedMenu.classList.remove('show');
  });

  // Next Episode Button
  const videoNextBtn = document.getElementById('videoNextBtn');
  if (videoNextBtn) {
    videoNextBtn.addEventListener('click', () => {
      const total = readerActiveItem.type.toLowerCase() === 'anime' ? readerActiveItem.episodes : getChapterCount(readerActiveItem);
      if (readerActiveIndex < total) {
        openReader(readerActiveItem.id, readerActiveIndex + 1);
        showToast(`Memutar Episode ${readerActiveIndex}...`);
      } else {
        showToast(t('toast_last_episode'), true);
      }
    });
  }

  // Fullscreen toggle simulation
  const videoFullscreenBtn = document.getElementById('videoFullscreenBtn');
  if (videoFullscreenBtn) {
    videoFullscreenBtn.addEventListener('click', () => {
      const videoWrapper = document.querySelector('.video-wrapper');
      if (!document.fullscreenElement) {
        if (videoWrapper) {
          videoWrapper.requestFullscreen().catch(err => {
            showToast(t('toast_fullscreen_unsupported'), true);
          });
        }
      } else {
        document.exitFullscreen();
      }
    });
  }

  // Picture in Picture simulation
  const videoPipBtn = document.getElementById('videoPipBtn');
  if (videoPipBtn) {
    videoPipBtn.addEventListener('click', () => {
      showToast("💡 Picture-in-Picture diaktifkan (simulasi)");
    });
  }

  // Initialize display lists
  generateDynamicFavicon();
  updateAuthUI();
  switchView('explore');
  
  setTimeout(() => {
    showToast(t('toast_welcome_app'));
  }, 1000);
});
