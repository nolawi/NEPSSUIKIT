import { MockRequest } from '@delon/mock';

const list: any[] = [];
const total = 50;

for (let i = 0; i < total; i += 1) {
  list.push({
    id: i + 1,
    disabled: i % 6 === 0,
    href: 'https:/sec.gov',
    no: `TradeCode ${i}`,
    title: `-task name ${i}`,
    owner: 'Pryamid Solutions',
    description: 'This is description',
    callNo: Math.floor(Math.random() * 1000),
    status: Math.floor(Math.random() * 10) % 4,
    updatedAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
    createdAt: new Date(`2017-07-${Math.floor(i / 2) + 1}`),
    progress: Math.ceil(Math.random() * 100),
  });
}

function genData(params: any) {
  let ret = [...list];
  // tslint:disable-next-line: one-variable-per-declaration
  const pi = +params.pi,
    ps = +params.ps,
    start = (pi - 1) * ps;

  if (params.no) {
    ret = ret.filter(data => data.no.indexOf(params.no) > -1);
  }

  return { total: ret.length, list: ret.slice(start, ps * pi) };
}

function saveData(id: number, value: any) {
  const item = list.find(w => w.id === id);
  if (!item) return { msg: '无效用户信息' };
  Object.assign(item, value);
  return { msg: 'ok' };
}

export const USERS = {
  '/user': (req: MockRequest) => genData(req.queryString),
  '/user/:id': (req: MockRequest) => list.find(w => w.id === +req.params.id),
  'POST /user/:id': (req: MockRequest) => saveData(+req.params.id, req.body),
  '/user/current': {
    name: 'Examiner',
    userid: '00000001',
    email: 'info@sec.got',
    signature: 'Lorem',
    title: 'title',
    group: 'Group',
    tags: [
      {
        key: '0',
        label: 'test',
      },
      {
        key: '1',
        label: 'test',
      },
      {
        key: '2',
        label: 'test~',
      },
      {
        key: '3',
        label: 'test',
      },
      {
        key: '4',
        label: 'test',
      },
      {
        key: '5',
        label: 'test',
      },
    ],
    notifyCount: 12,
    country: 'USA',
    geographic: {
      province: {
        label: 'Label',
        key: '330000',
      },
      city: {
        label: 'Label',
        key: '330100',
      },
    },
    address: 'Address',
    phone: 'Phone',
  },
  'POST /user/avatar': 'ok',
  'POST /login/account': (req: MockRequest) => {
    const data = req.body;
    if (!(data.userName === 'admin' || data.userName === 'user') || data.password !== 'psi') {
      return { msg: `Invalid username or password（admin/psi）` };
    }
    return {
      msg: 'ok',
      user: {
        token: '123456789',
        name: data.userName,
        email: `${data.userName}@sec.gov`,
        id: 10000,
        time: +new Date(),
      },
    };
  },
  'POST /register': {
    msg: 'ok',
  },
};
