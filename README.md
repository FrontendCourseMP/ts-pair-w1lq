19.11.2025


Имя команды: 
Участники:
1. Болохонцев Виктор Андреевич - w1lqA

1) Zod - https://github.com/colinhacks/zod
    40.7k | Лучшая для TypeScript, отличная типобезопасность
2) Yup - https://github.com/jquense/yup
    23.6k | Ветеран валидации, простая но изначально для JS
3) Valibot - https://github.com/fabian-hiller/valibot
    8.2k | Ультра-легкая, современный аналог Zod
4) TypeBox - https://github.com/sinclairzx81/typebox
    6.2k | Для JSON Schema и OpenAPI документации
5) ArkType - https://github.com/arktypeio/arktype
    7.3k | Уникальный синтаксис близкий к нативному TS

точка входа:
    import { z } from 'zod'; или import * as z from "zod";
мин. набор:
    z.string()     - строка
    z.number()     - число
    z.boolean()    - булево значение
    z.date()       - дата
    z.array()      - массив
    z.object()     - объект

основные методы

для всех типов
    .parse(data) - валидация с выбрасыванием ошибки
    .safeParse(data) - валидация без исключения (возвращает объект с результатом)
    .optional() - делает поле необязательным
    .nullable() - разрешает null
    .default(value) - значение по умолчанию

string
    .min(n) - минимальная длина
    .max(n) - максимальная длина
    .email() - проверка на email
    .url() - проверка на URL

number
    .min(n) - минимальное значение
    .max(n) - максимальное значение
    .int() - только целые числа

object
    .shape - доступ к полям схемы
    .extend() - расширение схемы
    .pick() / .omit() - выбор/исключение полей

