import React, { useEffect, useState } from 'react';
import './style.css';
// import { Container } from './styles';
import { object, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { api } from '../../service/api';

const schema = z.object({
    igrejaOrganizada: z.string().nonempty('O campo e obrigatorio'),
    igrejaNaoOrganizada: z.string().nonempty('O campo e obrigatorio'),
    contagemPresencasMembroSabatinaSegundoSabado: z
        .string()
        .nonempty('O campor eh obrigatorio'),
    contagemPresencasMembroSabatinaSetimoSabado: z
        .string()
        .nonempty('O campor eh obrigatorio'),
    numeroMembroTrimestreAnterior: z
        .string()
        .nonempty('O campor eh obrigatorio'),
    totalMembroGanho: z.string().nonempty('O campor eh obrigatorio'),
    totalMembroGanhoPorBaptismo: z.string().nonempty('O campor eh obrigatorio'),
    totalMembroGanhoPorRebaptismo: z
        .string()
        .nonempty('O campor eh obrigatorio'),
    totalMembroGanhoPorCartaMno: z.string().nonempty('O campor eh obrigatorio'),
    totalMembroGanhoPorOutrasMissoes: z
        .string()
        .nonempty('O campor eh obrigatorio'),
    totalMembroGanhoPorProfissaoFe: z
        .string()
        .nonempty('O campor eh obrigatorio'),
    totalPerda: z.string().nonempty('O campor eh obrigatorio'),
    totalPerdaPorApostasia: z.string().nonempty('O campor eh obrigatorio'),
    totalPerdaPorCartaMno: z.string().nonempty('O campor eh obrigatorio'),
    totalPerdaPorDesaparecido: z.string().nonempty('O campor eh obrigatorio'),
    totalPerdaPorMorte: z.string().nonempty('O campor eh obrigatorio'),
    totalMembroFimActual: z.string().nonempty('O campor eh obrigatorio'),
    totalPerdaPorOutrasMissoes: z.string().nonempty('O campor eh obrigatorio'),
    contagemPresencasMembroCultoSoleneSegundoSabado: z
        .string()
        .nonempty('O campor eh obrigatorio'),
    contagemPresencasMembroCultoSoleneSetimoSabado: z
        .string()
        .nonempty('O campor eh obrigatorio'),
});

function Lancamento() {
    const [totalG, setTotalG] = useState(0);
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        const newData = Object.assign(data, {
            anoId: 1,
            igrejaId: 1,
            usuarioId: 1,
            trimestreId: 1,
        });

        console.table(newData);

        await api
            .post('/lancamento/add', newData)
            .then((r) => {
                console.log('Lancamento submetido com sucesso!...');
            })
            .catch((e) => {
                console.log('Falha na submissao');
            });
    };

    useEffect(() => {
        const { unsubscribe } = watch((value) => {
            let valor =
                value.totalMembroGanhoPorBaptismo !== ''
                    ? value.totalMembroGanhoPorBaptismo
                    : 0;

            console.log(valor);
        });

        return () => {
            unsubscribe();
        };
    }, [watch]);

    const somaTotalGanho = () => {
        console.log('cheguei aqui');
        console.log(watch('totalMembroGanhoPorBaptismo'));
    };

    return (
        <div className="content-lancamento">
            <div className="item-lancamento"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="item-lancamento">
                    <h3 className="painel">Painel I</h3>
                    <div className="form-content">
                        <div className="item">
                            <label className="linha">Igrejas Organizadas</label>
                            <input
                                className="input"
                                type="number"
                                {...register('igrejaOrganizada')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">
                                Igrejas Não Organizadas
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register('igrejaNaoOrganizada')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">
                                Contagem de presenças de Membros na Escola
                                Sabatina no 2º Sábado
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register(
                                    'contagemPresencasMembroSabatinaSegundoSabado'
                                )}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">
                                Contagem de presenças de Membros na Escola
                                Sabatina no 7º Sábado
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register(
                                    'contagemPresencasMembroSabatinaSetimoSabado'
                                )}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">
                                Número de Membro do Trimestre anterior
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register('numeroMembroTrimestreAnterior')}
                            />
                        </div>
                    </div>
                </div>

                <div className="item-lancamento">
                    <h3>Painel II</h3>
                    <div className="form-content">
                        <div className="item">
                            <label className="linha">
                                TOTAL DE MEMBROS GANHO NO PRESENTE TRIMESTRE
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalMembroGanho')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">Por Baptismo</label>

                            <input
                                className="input"
                                type="number"
                                {...register('totalMembroGanhoPorBaptismo')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">Por Rebaptismo</label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalMembroGanhoPorRebaptismo')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">Por Profissão de Fé</label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalMembroGanhoPorProfissaoFe')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">
                                Por Carta, vindo das Igrejas da MNO
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalMembroGanhoPorCartaMno')}
                            />
                        </div>

                        <div className="item">
                            <label className="linha">
                                Por Carta, vindo de outras Missões
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register(
                                    'totalMembroGanhoPorOutrasMissoes'
                                )}
                            />
                        </div>
                    </div>
                </div>

                <div className="item-lancamento">
                    <h3>Painel III</h3>
                    <div className="form-content">
                        <div className="item">
                            <label className="linha">
                                TOTAL DE MEMBROS PERDIDOS NO PRESENTE TRIMESTRE
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalPerda')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">
                                Por Carta, para as Igrejas da MNO
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalPerdaPorCartaMno')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">
                                Por Carta, para as Igrejas de outras Missões
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalPerdaPorOutrasMissoes')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">Por Morte</label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalPerdaPorMorte')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">Por Apostasia</label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalPerdaPorApostasia')}
                            />
                        </div>

                        <div className="item">
                            <label className="linha">Desaparecidos</label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalPerdaPorDesaparecido')}
                            />
                        </div>
                    </div>
                </div>

                <div className="item-lancamento">
                    <h3>Painel IV</h3>
                    <div className="form-content">
                        <div className="item">
                            <label className="linha">
                                Total de Membro No Fim do Actual Trimestre
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register('totalMembroFimActual')}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">
                                Contagem de presenças de Membros no Culto Solene
                                no 2º Sábado
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register(
                                    'contagemPresencasMembroCultoSoleneSegundoSabado'
                                )}
                            />
                        </div>
                        <div className="item">
                            <label className="linha">
                                Contagem de presenças de Membros no Culto Solene
                                no 7º Sabado
                            </label>
                            <input
                                className="input"
                                type="number"
                                {...register(
                                    'contagemPresencasMembroCultoSoleneSetimoSabado'
                                )}
                            />
                        </div>
                    </div>
                </div>

                <button className="submit-button" type="submit">
                    Submeter
                </button>
            </form>
        </div>
    );
}

export default Lancamento;
