# This is just a simple UI to fetch data from python backedn and display it
it willl show user infos and ure registration

# Next steps
I found my brain more active in the evening, after taking shower.
I played Dota2 with my roomates last night, unitll 4am, so i felt headache now, i'll try to write the ides and go to sleep

1. I need to keep working on the API, I only tested Users but I still ahve Address and I havent use it for a long time
2. I may need ot modify the database relation between User and Address, currently they are two separate tables, but I want to connect them , so 1 user can have many addresses
3. I neeed to add User Login page, and User Login API,and after login, the user can view/add/delete addresses to this account
4. When everything works fine in local environment, I want to move the fonrtend and backend code to AWS. Deploy two parts in different VM and let them communicate, this step should not be ez, but I found a  <a href="https://www.freecodecamp.org/news/lessons-learned-from-deploying-my-first-full-stack-web-application-34f94ec0a286/"> Link <a> which might give some hint on how to do it

5. good night

# 11/8/2020
added JWT for login authentication, but the page cannot remember state after refreshing, it's suggested to use localStorage in react, i'll take a look tomorrow
