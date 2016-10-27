  (
                function medenkaWars(data) {
                    let vitkor = {name:'Vitkor',damage:0,lastattack:0,consattacks:1};
                    let naskor = {name:'Naskor',damage:0,lastattack:0,consattacks:1};


                    for (let datarow of data){
                        let [n,attacker,na] = datarow.split(' ');
                        let attacks = Number(n);
                        if (attacker === 'white'){
                            if (attacks == vitkor.lastattack){
                                vitkor.consattacks++;
                                vitkor.lastattack = attacks;
                            }else {
                                vitkor.consattacks = 1;
                                vitkor.lastattack = attacks;
                            }
                            if (vitkor.consattacks == 2){
                                naskor.damage += attacks * 60 * 2.75;
                            }else naskor.damage += attacks * 60;
                        }
                        if (attacker === 'dark'){
                            if (attacks == naskor.lastattack){
                                naskor.consattacks++;
                                naskor.lastattack = attacks;
                            }else {
                                naskor.consattacks = 1;
                                naskor.lastattack = attacks;
                            }
                            if (naskor.consattacks == 5){
                                vitkor.damage += attacks * 60 * 4.5;
                            }else vitkor.damage += attacks * 60;
                        }
                    }
                    if (vitkor.damage > naskor.damage){
                        console.log('Winner - Naskor');
                        console.log('Damage - ' + vitkor.damage);
                    }else {
                        console.log('Winner - Vitkor');
                        console.log('Damage - ' + naskor.damage);
                    }
                }

        )(['2 dark medenkas',
            '1 white medenkas',
            '2 dark medenkas',
            '2 dark medenkas',
            '15 white medenkas',
            '2 dark medenkas',
            '2 dark medenkas',
        ]);
