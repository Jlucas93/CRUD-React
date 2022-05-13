/**
 * @name criacao-de-modelos
 * @author Diego Sena, João Lucas, Erick Macedo
 */
// Cached
const process_variables = await context.variables.get()
const batch = []
// Modelo: Mapeamento de processos
if (process_variables.Field_L8V6XEGF === 'Aplica-se') {
  const file_content = await context.files.uid('280067226013270016').get()
  batch.push([
    12,
    () => context.variables.post({
      modifications: {
        Field_CE976TXW: {
          value: JSON.stringify({
            title: 'DETALHAMETO DO PROCESSO.xlsx',
            data: file_content.toString('base64')
          }),
          type: 'Object',
          valueInfo: {
            objectTypeName: 'java.lang.Object',
            serializationDataFormat: 'application/json'
          }
        }
      }
    })
  ])
}
// Modelo: Análise de risco
if (process_variables.Field_77H26545 === 'Aplica-se') {
  const modelo_analise_de_risco = (
    await context.files.uid('281479077695586304').get()
  ).toString('base64')
  const setores = {
    Atendimento: {
      field: 'Field_3EPNR5ON',
      destino: '279593690495524864',
    },
    'Saúde Ocupacional': {
      field: 'Field_KIG2DCJK',
      destino: '279593601584668672',
    },
    Exames: {
      field: 'Field_4T9F6HWR',
      destino: '279593807684378624',
    },
    Qualidade: {
      field: 'Field_ZQ3CF9VH',
      destino: '279593863166631936',
    },
    'Núcleo de Relacionamento': {
      field: 'Field_PXQ0P7NQ',
      destino: '279593529815932928',
    },
    Higienização: {
      field: 'Field_AYOQIP2Y',
      destino: '279593463990525952',
    },
  }
  const analise_de_risco_file_list = Object.fromEntries(
    Object.keys(setores)
      .map(setor => [
        setores[setor].field,
        {
          value: JSON.stringify({
            title: `${setor}.xlsx`,
            data: modelo_analise_de_risco
          }),
          type: 'Object',
          valueInfo: {
            objectTypeName: 'java.lang.Object',
            serializationDataFormat: 'application/json'
          }
        }
      ])
  )
  batch.push([
    79,
    () => context.variables.post({ modifications: analise_de_risco_file_list })
  ])
}
// Modelo: Procedimentos
if (process_variables.Field_CZO1DRTV === 'Aplica-se') {
  const modelo_procedimentos = (
    await context.files.uid('282113258259742720').get()
  ).toString('base64')
  const setores = {
    Sistema: 'Field_Z1Q7ATZJ',
    Operacional: 'Field_EMK434XW',
    Técnicos: 'Field_S27ZB005',
    Equipamento: 'Field_W7CD6RZA',
    Gestão: 'Field_12XHM9PI'
  }
  for (const setor in setores) {
    const setor_campo = setores[setor]
    batch.push([
      98,
      () => context.variables.post({
        modifications: {
          [setor_campo]: {
            value: JSON.stringify({
              title: setor + '.docx',
              data: modelo_procedimentos
            }),
            type: 'Object',
            valueInfo: {
              objectTypeName: 'java.lang.Object',
              serializationDataFormat: 'application/json'
            }
          }
        }
      })
    ])
  }
}
// Modelo: Normas, leis e portarias
if (process_variables.Field_19A382XT === 'Aplica-se') {
  const modelo_normas = await context.files.uid('283682376582692864').get()
    .then(data => data.toString('base64'))
  batch.push([
    123,
    () => context.variables.post({
      modifications: {
        Field_WSR155FF: {
          title: 'Normas.xlsx',
          data: modelo_normas
        }
      }
    })
  ])
}
await Promise.all(
  batch.map(([_, run]) => run())
)
