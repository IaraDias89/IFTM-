package com.iara.lista01.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SorteioController {

    @GetMapping("/sorteio")
    public String telaSorteio() {
        return "resultado"; // templates/resultado.html
    }

    @GetMapping("/gerarnumeros")
    public String gerarNumeros(Model modelo) {
        List<Integer> numeros = new ArrayList<>();
        Random random = new Random();

        while (numeros.size() < 6) {
            int numero = random.nextInt(60) + 1;
            if (!numeros.contains(numero)) {
                numeros.add(numero);
            }
        }

        modelo.addAttribute("numeros", numeros);
        return "resultado"; // templates/resultado.html
    }
}