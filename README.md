# Olympic villages
### Описание\правила предметной области
Наша курсовая работа - разработка базы данных для системы, предоставляющей информацию об организации Олимпийской деревни.
Эта деревня представляет из себя комплекс зданий, в которых располагаются и живут участники (спортсмены) олимпийских игр. Спортсмены, участвующие в Олимпиаде, проживают в этой деревне во время проведения Олимпиады. 
Помимо самих спортсменов в деревне живут их тренеры, руководители команд, обслуживающий и технический персонал. Однако судьи и журналисты не могут там находиться.
В деревне находятся собственно жилые здания, объекты инфраструктуры. Это могут быть столовые, различные магазины, парикмахерские и тому подобное.
Олимпийская деревня должна содержать в себе церкви для людей разных вероисповеданий. 
Одной из важнейших вещей в Олимпийской деревне является спорткомплекс. В нем спортсмены должны тренироваться перед соревнованиями. Спорткомплекс деревни должен предоставлять все условия для тренировки спортсменов и их комфортного проживания. Таким образом, это целый городок, который должен быть расположен близко к олимпийским стадионам и местам проведения спортивных состязаний. 
Спортсмены живут в деревне в течение трех неделей перед наступлением начала Олимпийских игр.
Строительство Олимпийской деревни это обязанность города, который является организатором Олимпиады.
Важно то, что Олимпийская деревня реализует проживание людей разных рас и национальностей вместе. Там они вместе тренируются и учатся друг у друга. В олимпийской деревне всегда царит дух дружбы между спортсменами. Совместное проживание, тренировки, отдых и развлечения создают отличные условия для сближения молодежи различных стран мира.
Сейчас создание Олимпийской деревни узаконено Хартией, определившей основные требования, которые предъявляются к ней. Деревня должна располагаться как можно ближе к главному стадиону и другим спортивным сооружениям. 
За последнее время изменился вид Олимпийской деревни, и внешне она совсем не похожа на деревню — теперь это современные высотные здания, прекрасно оборудованные спортивные комплексы для тренировок, обязательно — медицинский, торговый центры, столовые, почта, бани.
В олимпийской деревне есть культурный центр. Он создает условия для отдыха и дружеского общения спортсменов всех олимпийских делегаций.
Для того, чтобы лучше понять, что представляет из себя наша предметная область, рассмотрим примерный распорядок дня спортсмена, пребывающего в олимпийской деревне.
Утром спортсмен просыпается в жилом здании. Он умывается, делает утреннюю зарядку (если надо, бегает вокруг жилого корпуса). Завтракать спортсмен идет в специальную столовую - там его кормят той же едой, что и остальных спортсменов. Еду готовят специально обученные повара. 
После этого спортсмен может отдохнуть: посетить магазины, культурный центр. Если спортсмен религиозен, то он может посетить одну из церквей, которая ему подходит, и помолиться. Также спортсмен в это время может воспользоваться услугами парикмахера или сходить в салон.
Затем приходит время тренировок. Спортсмен и его тренер, который тоже пребывает в олимпийской деревне, идут тренироваться в спортивный зал. На территории деревни много разных спортивных залов с разным спортивным инвентарем, так что спортсмен и тренер идут в подходящий для них. 
Не каждый день но иногда в деревне устраиваются специальные развлекательные мероприятия, нацеленные на то, чтобы сблизить людей разных национальностей.
Если спортсмен почувствует, что ему нездоровится, он посещает специальные медицинские центры, которые открыты круглые сутки. 
Обедает и ужинает спортсмен тоже в столовых.
Внутри жилых комплексов достаточно оборудования и комнат для вечернего отдыха - библиотеки, телевизор и т.д.
Наша база данных удобна для использования и общения между спортсменами и их менеджерами. Например, менеджеры могут организовывать мероприятия и расписания дня для спортсменов, а спортсмены, соответственно, в удобном формате получать информацию. Также эта база данных нужна для страны-организатора олимпиады (администраторов),  чтобы организовать инфраструктуру деревни. 
Опишем этот момент чуть более подробно. Допустим, менеджер спортсмена решил, что в понедельник спортсмен должен тренироваться. Спортсмен пусть является пловцом. Тогда менеджер выбирает нужный спортивный зал (очевидно, содержащий в себе бассейн), убеждается в том, что там есть необходимый инвентарь и бронирует на определенное время. Затем менеджер решил, что во вторник спортсмену хорошо бы было отдохнуть. В базе данных хранится информация о проводимых не спортивных мероприятиях, например об экскурсиях для спортсменов из разных стран. Тогда менеджер либо записывает спортсмена на это мероприятие, либо выбирает ему другой вид досуга (поход по магазинам например). 
Собственно со стороны спортсмена принятые менеджером решения выглядят как расписание. Это решает, кстати, проблему бесконечных созвонов и переговоров со своим менеджером.
