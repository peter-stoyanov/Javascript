(
                function bunny(data) {
                    let a = data[data.length - 1].split(' ');
                    //let bombs = a.split(',').map(x=>Number(x));
                    let bombs = [];
                    for (coord of a){
                        let [r,c] = coord.split(',').map(x => Number(x));
                        bombs.push({row:r, col:c });
                    }
                    a = data.pop();
                    let matrix = data.map(x => x.split(' ').map(x => Number(x)));
                    let kills = 0;
                    let damage = 0;
                    //matrix[0][0]=3;
                    for (bomb of bombs){
                        if(matrix[bomb.row][bomb.col] > 0){
                            let decrease = matrix[bomb.row][bomb.col];
                            kills++;
                            damage += decrease;
                            let startrow = Math.max(0,bomb.row - 1);
                            let endrow = Math.min(bomb.row + 1,matrix.length - 1);
                            let startcol = Math.max(0,bomb.col - 1);
                            let endcol = Math.min(bomb.col + 1,matrix[bomb.row].length - 1);

                            for (let i = startrow; i <= endrow; i++){
                                for (let j = startcol; j <= endcol; j++){
                                    if (i == bomb.row && j == bomb.col){
                                        matrix[i][j] = 0;
                                    }else {
                                        matrix[i][j] = Math.max(0,matrix[i][j] - decrease);
                                    }
                                }
                            }
                        }
                    }

                    for (let i = 0; i < matrix.length;i++){
                        for (let j=0; j<matrix[0].length; j++){
                            if (matrix[i][j] > 0){
                                kills++;
                                damage += matrix[i][j];
                            }
                        }
                    }

                    console.log(damage);
                    console.log(kills);
                }

        )(['5 10 15 20',
            '10 10 10 10',
            '10 15 10 10',
            '10 10 10 10',
                '2,2 0,1'

        ]);
