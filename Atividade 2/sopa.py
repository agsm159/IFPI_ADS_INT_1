import re
import requests
import requests_cache
from bs4 import BeautifulSoup


def main():
    print("-="*5,"MENU", "-="*5)
    print("1 - Verificar link")
    print("0 - Sair")
    print("-="*13)

    opcao = int(input("\nOpção desejada: "))

    if opcao == 1:
        lista_links()

    elif opcao == 0:
        pass
    else:
        print("Opção inválida!")


def lista_links():
    requests_cache.install_cache()
    
    link = input("\nColoque um link: ")
    response = requests.get(link)
    html = response.text
    sopa = BeautifulSoup(html,"html.parser")
    links = sopa.select('a[href*="http"]')
    
    lista = []
    ctd = 0
    
    for link in links:
        if ctd < 10:
            lista.append(link.get("href"))
            ctd += 1
    for i in range(len(lista)):
        print(f"{i + 1} ----> {lista[i]}")

    word_key(lista)

def word_key(lista):
    n_link = int(input("\nDigite o número de um dos links: "))
    w_key = input("Digite uma palavra-chave: ")

    resp = requests.get(lista[n_link - 1])
    page = resp.text
    soup = BeautifulSoup(page,"html.parser")

    esp_link = soup.find_all(string=re.compile(w_key))
    
    for item in esp_link:
        print(item)

main()