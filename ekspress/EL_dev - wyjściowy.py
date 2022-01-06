
import random

class coffee_machine():
    """ Electricity device
            property specification:
                __status - device is on (1 or 'ON') or off (0 or 'OFF')
                __psu - power supply (alternating current (1 or 'AC')/ direct current (0 or 'DC')
                __voltage - supply voltage ([V])
                __power - device power([W])
                __usable - 'True' if usable
                __powerOnCounter
            out parameters:
                voltage_in - incoming voltage
    """

    def __init__(self, psu, voltage, power):
        self.__status = 0
        self.__powerOnCounter = 0
        self.__usable = True
        self.__psu = psu
        self.__voltage = voltage
        self.__power = power
        self.__procent = 2 #poczatkowa szansa ze urzadzenie sie wysypie
        self.__awaria = ''
        self.__water = 2200 #ilosc wody w ml & maksymalna ilość wody
        self.__coffee = 250 #ilosc kawy w gramach & naksymalna ilość kawy
        self.__milk = 500 #ilosc mleka w ml & maksymalna ilość mleka
        self.__chocolate = 250 #ilosc czekoladu w gramach & maksymana ilość czekolady
        self.__rodzaje = ['americano','macchiato','cappuccino','breve','vienna','latte']
        self.__brudno = 50

    def on(self):
        if self.__usable == True:
            self.__powerOnCounter = self.__powerOnCounter + 1
            self.__procent = self.__procent + 1 #kazde uruchomienie (taka chińszczyzna)
            if self.__voltage > 260:
                if self.__psu == 'AC':
                    self.__procent = self.__procent + 10
                else:
                    self.__procent = self.__procent + 5
            boom = random.randint(1,100)
            if boom <= self.__procent:
                self.__usable = False
            self.__status = 1

    def menu(self):
        if self.__usable==True:
            if self.__status == 1:
                uno = self.__rodzaje[0]
                due = self.__rodzaje[1]
                tre = self.__rodzaje[2]
                quattro = self.__rodzaje[3]
                cinque = self.__rodzaje[4]
                sei = self.__rodzaje[5]
                return "Rodzaje kaw: \n1. {0}\n2. {1}\n3. {2}\n4. {3}\n5. {4}\n6. {5}\n".format(uno, due, tre, quattro, cinque, sei)
            else:
                return "Włącz urządzenie!"
        else:
            return "Urządzenie uszkodzone!"

    def pick_coffee(self,rodzaj):
        if self.__usable==True:
            if self.__status == 1:
                error = 1
                for a in range(len(self.__rodzaje)):
                    if rodzaj == self.__rodzaje[a]:
                        error = 0
                if error == 1:
                    print('Nie ma takiego rodzaju kawy jak:', rodzaj)
                else:
                    if rodzaj == 'americano':
                        if self.__water > 150 and self.__coffee > 10:
                            print('Kawa się robi.... Można odebrać napój!\n')
                            self.__water = self.__water - 150
                            self.__coffee = self.__coffee - 10
                            self.__brudno = self.__brudno + 1
                        else:
                            print(
                                'Nie ma wystarczającej ilości wody lub kawy do zrobienia kawy (woda 150ml, kawa 10gr)')

                    if rodzaj == 'macchiato':
                        if self.__water > 150 and self.__coffee > 10 and self.__chocolate > 20:
                            print('Kawa się robi.... Można odebrać napój!\n')
                            self.__water = self.__water - 150
                            self.__coffee = self.__coffee - 10
                            self.__chocolate = self.__chocolate - 20
                            self.__brudno = self.__brudno + 1
                        else:
                            print(
                                'Nie ma wystarczającej ilości wody, kawy lub czekolady do zrobienia kawy (woda 150ml, kawa 10gr, czekolada 20gr)')

                    if rodzaj == 'cappuccino':
                        if self.__water > 100 and self.__coffee > 10 and self.__milk > 50:
                            print('Kawa się robi.... Można odebrać napój!\n')
                            self.__water = self.__water - 100
                            self.__coffee = self.__coffee - 10
                            self.__milk = self.__milk - 20
                            self.__brudno = self.__brudno + 1
                        else:
                            print(
                                'Nie ma wystarczającej ilości wody, kawy lub mleka do zrobienia kawy (woda 100ml, kawa 10gr, mleko 50ml)')

                    if rodzaj == 'breve':
                        if self.__water > 100 and self.__coffee > 15 and self.__milk > 75:
                            print('Kawa się robi.... Można odebrać napój!\n')
                            self.__water = self.__water - 100
                            self.__coffee = self.__coffee - 15
                            self.__milk = self.__milk - 75
                            self.__brudno = self.__brudno + 1
                        else:
                            print(
                                'Nie ma wystarczającej ilości wody, kawy lub mleka do zrobienia kawy (woda 100ml, kawa 15gr, mleko 75ml)')

                    if rodzaj == 'vienna':
                        if self.__water > 100 and self.__coffee > 20 and self.__chocolate > 50:
                            print('Kawa się robi.... Można odebrać napój!\n')
                            self.__water = self.__water - 150
                            self.__coffee = self.__coffee - 20
                            self.__chocolate = self.__chocolate - 50
                            self.__brudno = self.__brudno + 1
                        else:
                            print(
                                'Nie ma wystarczającej ilości wody, kawy lub czekolady do zrobienia kawy (woda 150ml, kawa 20gr, czekolada 50gr)')

                    if rodzaj == 'latte':
                        if self.__water > 100 and self.__coffee > 20 and self.__milk > 80:
                            print('Kawa się robi.... Można odebrać napój!\n')
                            self.__water = self.__water - 100
                            self.__coffee = self.__coffee - 20
                            self.__milk = self.__milk - 80
                            self.__brudno = self.__brudno + 1
                        else:
                            print('Nie ma wystarczającej ilości wody, kawy lub mleka do zrobienia kawy (woda 100ml, kawa 20gr, mleka 80ml)')
            else:
                print("Włącz urządzenie!")
        else:
            return "Urządzenie uszkodzone!"

    def uzupelienie(self,woda,mleko,czekolada,kawa):

        if self.__coffee + kawa > 250:
            print('Dosyp mniej kawy, bo tyle się nie zmieści.')
        else:
            print('Dosypano',kawa,'gram kawy')
            self.__coffee = self.__coffee + kawa

        if self.__chocolate + czekolada > 250:
            print('Dosyp mniej czekolady, bo tyle się nie zmieści.')
        else:
            print('Dosypano',czekolada,'gram czekolady')
            self.__chocolate = self.__chocolate + czekolada

        if self.__milk + mleko > 500:
            print('Dolej mniej mleka, bo tyle się nie zmieści.')
        else:
            print('Dolano',mleko,'ml mleka')
            self.__milk = self.__milk + mleko

        if self.__water + woda > 2200:
            print('Dolej mniej wody, bo tyle się nie zmieści.')
        else:
            print('Dolano',woda,'ml wody')
            self.__water = self.__water + woda
        print()
    def stan(self):
        if self.__usable==True:
            if self.__status == 1:
                if self.__water > 200 and self.__milk > 100 and self.__coffee > 50 and self.__chocolate > 55:
                    if self.__brudno > 50:
                        print('Przydałoby się trochę wyczyścić ekspres ;)')
                    return "Ilość wody {0} ml\nIlość kawy {1} gram\nIlość mleka {2} ml\nIlość czekolady {3} gram\n".format(self.__water,self.__coffee,self.__milk,self.__chocolate)
                else:
                    if self.__brudno > 50:
                        print('Przydałoby się trochę wyczyścić ekspres ;)')
                    print('Prosze uzupełnić zbiorniki ekspresu!')
            else:
                return "Włącz urządzenie!"
        else:
            return "Urządzenie uszkodzone!"
    def off(self):
        if self.__usable == True:
            self.__status = 0

    def __int__(self):
        if self.__status == 0 or self.__status == 'OFF':
            return 0
        else:
            return 1

    def __str__(self):
        if self.__psu == 1 or self.__psu == 'AC':
            psu = 'prądem zmiennym'
        else:
            psu = 'prądem stałym'
        if self.__status == 1 or self.__status == 'ON':
            status = 'włączone'
        else:
            status = 'wyłączone'
        if not self.__usable:
            status = 'uszkodzone'
        if self.__usable == True:
            return "Urządzenie zasilane {0} o napięciu nominalnym {1} [V] jest {2}.\nCałkowita liczba uruchomień urządzenia: {3}.".format(psu, self.__voltage, status,self.__powerOnCounter)
        else:
            return "Urządzenie popsute! Szansa na awarie wynosiła {0} %".format(self.__procent)

#tworzenie obiektu
ekspres = coffee_machine('AC', 230, 1550)

ekspres.on()
print(str(ekspres))
print()
#stan zbiorników w ekspresie /pokazuje komunikat błędu jeśli urządzenie jest wyłączone
print(ekspres.stan())
#rodzaje kaw /pokazuje komunikat błędu jeśli urządzenie jest wyłączone
print(ekspres.menu())
#wybór kawy, złe wpisanie nazyw powoduje wywołanie komunikatu. Po wybraniu odpowiedniej kawy, ekspres ją przygotowuje i pobiera potrzebne ilości: wody, mleka itp.
ekspres.pick_coffee('czokoloko')
ekspres.pick_coffee('latte') #latte 100ml wody, 20gr kawy, 80ml mleka
print(ekspres.stan())

#możliwość dosypania/dolania potrzebnych rzeczy do zrobienia kawy, eksores.uzupelnienie (woda,mleko,czekolada,kawa) + działa nawet jak urządzenie jest wyłączone
ekspres.off()
ekspres.uzupelienie(50,30,5,90)
ekspres.on()

#sprawdzenie ponownie stanu
print(ekspres.stan())

#opcje nie uruchamiają się gdy urządzenie
#eksperes przypomina co jakiś czas urzytkownikowi, że czas go troche wyczyścić