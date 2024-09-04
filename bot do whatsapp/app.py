import openpyxl

workbook = openpyxl.load_workbook('contratos-2024-08-29-093214suspensos.xlsx')
pagina_clientes = workbook['Sheet1']


for linha in pagina_clientes.iter_rows(min_row=2):
    cliente = linha[0].value
    endereco = linha[1].value
    numero = linha[2].value

    print(cliente)
    print (endereco)
    print (numero)
